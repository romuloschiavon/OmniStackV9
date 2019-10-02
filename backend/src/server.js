const express = require('express'); //Requiring the main dependency Express
const mongoose = require('mongoose'); //Require mongoose
const cors = require('cors');
const app = express(); //Defining our app!
const routes = require('./routes'); //Requiring our routes

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
app.use(routes);


app.listen(3333);