const express = require("express");

const sRouter = express.Router();

//const { isAuthenticated } = require("../../../helpers/authentication");
//const otpController = require("../../../controllers/user/otpController");
const userController = require("../../controllers/userController")

sRouter
    .route("/")
    .get([], userController.getUserInfo)
    .post([], userController.create)
//.delete([], userController.delete);

module.exports = sRouter;
