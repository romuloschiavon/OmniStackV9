const express = require('express'); //Requiring the main dependency Express
const app = express(); //Defining our app!

// GET; POST; PUT; DELETE

/*
req.query = access query params for filters
req.params = access route params for edition/deleting
req.body = access body of the requisition for everything
*/

app.use(express.json());


app.listen(3333);