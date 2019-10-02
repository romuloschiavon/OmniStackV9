const User = require('../models/User'); //Require user model

module.exports = {
    async store(req,res){
        const { email }= req.body; //Require email from body

        let user = await User.findOne( { email }); 
        if(!user){ //Test if the user already exists
            user = await User.create({ email });
        };
        return res.json(user);
    }
};