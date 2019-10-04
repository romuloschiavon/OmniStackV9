const express = require('express'); //Requiring the main dependency Express
const mongoose = require('mongoose'); //Require mongoose
const cors = require('cors') //Requiring cors for API access
const path = require('path') //Requiring path for IMG access
const routes = require('./routes'); //Requiring our routes
const dotenv = require('dotenv');//Require DotEnv

const socketio = require ('socket.io'); //Require socket io for socket connections.
const http = require('http'); //Require http for backend sockets

const app = express(); //Defining our app!
const server = http.Server(app); //Define our server as a http.Server
const io = socketio(server); //Define our io for app.use next

dotenv.config();

mongoose.connect(process.env.CON_PAS, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}); //Database Connection above

const connectedUsers = {}; //Used for saying what is the true user id

io.on('connection', socket => {
    const { user_id } = socket.handshake.query;

    connectedUsers[user_id] = socket.id;
});

app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
});

// GET; POST; PUT; DELETE

/*
req.query = access query params for filters
req.params = access route params for edition/deleting
req.body = access body of the requisition for everything
*/

app.use(cors()); //Using cors for acess to the database
app.use(express.json()); //Using express.json because our connections and datas comes in json 
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads'))); //Routes for images
app.use(routes); //Routes


server.listen(3333); //Server listen