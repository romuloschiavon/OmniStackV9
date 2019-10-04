const express = require('express'); //Requiring the main dependency Express
const mongoose = require('mongoose'); //Require mongoose
const cors = require('cors') //Requiring cors for API access
const path = require('path') //Requiring path for IMG access
const routes = require('./routes'); //Requiring our routes

const socketio = require ('socket.io');
const http = require('http');

const app = express(); //Defining our app!
const server = http.Server(app);
const io = socketio(server);

io.on('connection', socket => {
    console.log('User connected', socket.id);
});

mongoose.connect('mongodb+srv://omnistacker:omnistacker@omnistackv9-tzs9q.mongodb.net/Week09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// GET; POST; PUT; DELETE

/*
req.query = access query params for filters
req.params = access route params for edition/deleting
req.body = access body of the requisition for everything
*/

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);


server.listen(3333);