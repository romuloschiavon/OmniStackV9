const mongoose = require('mongoose'); //Require Mongoose 

const BookingSchema = new mongoose.Schema({ //Saying what is the MongooseSchema for spots
    date: String,
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot'
    },
    
});

module.exports = mongoose.model('Spot', BookingSchema); //Exporting the Schema, and it references Users!