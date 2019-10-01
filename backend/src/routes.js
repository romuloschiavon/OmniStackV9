const express = require('express'); //Require express
const SessionController = require('./controllers/SessionController'); // Require controller for Sessions
const SpotController = require('./controllers/SpotController'); // Require controller for Spots

const routes = express.Router(); //Require express router functions

routes.post('/sessions', SessionController.store); //Creating the login
routes.post('/spots', SpotController.store); //Creating the spots

module.exports = routes;