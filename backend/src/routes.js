const express = require('express'); //Require express (necessary for everything!)
const multer = require('multer'); //Require multer (necessary for images)
const uploadConfig = require('./config/upload'); //Require our upload config

const SessionController = require('./controllers/SessionController'); // Require controller for Sessions
const SpotController = require('./controllers/SpotController'); // Require controller for Spots

const routes = express.Router(); //Require express router functions
const upload = multer(uploadConfig); //Using multer to config our upload

routes.post('/sessions', SessionController.store); //Creating the login
routes.get('/spots', upload.single('thumbnail'), SpotController.index); //Creating the filter for spots
routes.post('/spots', upload.single('thumbnail'), SpotController.store); //Creating the spots

module.exports = routes;