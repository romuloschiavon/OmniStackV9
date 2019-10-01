const Spot = require('../models/Spot');

module.exports = {
    async store(req, res) {
        const { filename } = req.file;
        const { company, techs, price } = req.body;


        return res.json({ ok: true});
    }
};