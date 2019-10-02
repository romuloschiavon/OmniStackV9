const mongoose = require('mongoose'); //Require Mongoose 

const SpotSchema = new mongoose.Schema({ //Saying what is the MongooseSchema for spots
    thumbnail: String, //Defining image
    company: String, //Defining company
    price: Number, //Defining price per day
    techs: [String], //Defining what technology it uses
    user: { //Defining what user is registering the Spot
        type: mongoose.Schema.Types.ObjectID,
        ref: 'User'
    }
}, {
    toJSON: {   
        virtuals: true },
});

SpotSchema.virtual('thumbnail_url').get(function() {
    return `http://localhost:3333/files/${this.thumbnail}`
});

module.exports = mongoose.model('Spot', SpotSchema); //Exporting the Schema, and it references Users!