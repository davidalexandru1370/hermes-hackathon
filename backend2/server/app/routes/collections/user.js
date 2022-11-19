const express = require("express");
const multer = require('multer');
const sRouter = express.Router();

//const { isAuthenticated } = require("../../../helpers/authentication");
const userController = require("../../controllers/userController")

const fileFilter = (req, file, cb) => {
    cb(null, true)
};

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'app/internal_storage')
    },
    filename(req, file, cb) {
        cb(null, `${req.body.id}.pdf`)
    }
})

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 25,
    },
    fileFilter: fileFilter,
});

sRouter
    .route("/")
    .post([], upload.single("img"),  userController.add_pdf)
    .put([], userController.get_pdf)

module.exports = sRouter;
