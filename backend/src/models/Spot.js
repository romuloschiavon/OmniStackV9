const mongoose = require('mongoose'); //Require Mongoose 

const SpotSchema = new mongoose.Schema({ //Saying what is the MongooseSchema for spots
    thumbnail: String, //Defining image
    company: String, //Defining company
    price: Number, //Defining price per day
    techs: [String], //Defining what technology it uses
    user: { //Defining what user is registering the Spot
        type: mongoose.Schema.Types.ObjectID,
        ref: 'User';
    }
});

module.exports = mongoose.model('User', SpotSchema); //Exporting the Schema, and it references Users!