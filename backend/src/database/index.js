const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config()

mongoose.connect(process.env.CON_PAS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;

module.exports = mongoose;