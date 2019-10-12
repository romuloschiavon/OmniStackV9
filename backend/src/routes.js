const express = require('express'); //Require express (necessary for everything!)
const multer = require('multer'); //Require multer (necessary for images)
const uploadConfig = require('./config/upload'); //Require our upload config

const SessionController = require('./controllers/SessionController'); //Require controller for Sessions
const SpotController = require('./controllers/SpotController'); //Require controller for Spots
const DashboardController = require('./controllers/DashboardController'); //Require controller for Spots
const BookingController = require('./controllers/BookingController'); //Require controller for Bookings
const ApprovalController = require('./controllers/ApprovalController'); //Require controller for approving bookings
const RejectionController = require('./controllers/RejectionController'); //Require controller for declining bookings
const routes = express.Router(); //Require express router functions
const upload = multer(uploadConfig); //Using multer to config our upload


routes.post('/sessions', SessionController.store); //Creating the login

routes.get('/spots', SpotController.index); //Creating the filter for spots
routes.post('/spots', upload.single('thumbnail'), SpotController.store); //Creating the spots

routes.get('/dashboard', DashboardController.show); //Creating the routes for the dashboard

routes.post('/spots/:spot_id/bookings', BookingController.store); //Creating a booking inside our SPOT!

routes.post('/bookings/:booking_id/approvals', ApprovalController.store);
routes.post('/bookings/:booking_id/rejections', RejectionController.store);

module.exports = routes;