const multer = require('multer'); //Require multer
const path = require('path'); //Require path

module.exports = {
    storage: multer.diskStorage({ //Store the image in the uploads folder
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);

            cb(null, `${name}-${Date.now()}${path.extname(ext)}`);
        },
    }),
};