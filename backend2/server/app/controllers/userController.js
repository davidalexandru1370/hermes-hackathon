const _ = require("lodash");
const moment = require("moment");
const { matchedData } = require("express-validator");

const userModel = require("../models/userModel");

// const { getTokenData, generateToken } = require("../helpers/authentication");
const { logger } = require("../helpers/logger");
const { handleSuccess, validateRequest } = require("../helpers/response")
//const { validateRequest, handleCustomValidationError, handleSuccess } = require("../helpers/response");

const controllerName = "userController";

// const userLogger = logger.child({ module: controllerName });

const getUserInfo = async (req, res) => {
    /*const validationRequest = await validateRequest(req, res, {});
    if (validationRequest !== null) {
        return validationRequest;
    }
    const tokenData = await getTokenData(req);
    const row = await userModel.getAllDetails(tokenData.id);
    return handleSuccess(res, "", row);*/
    const row = await userModel.find(1)
    return handleSuccess(res, "", row)
};

const create = async (req, res) => {
    const validationRequest = await validateRequest(req, res, {});
    if (validationRequest !== null) {
        return validationRequest;
    }
    const params = matchedData(req, {
        includeOptionals: true,
        onlyValidData: true
    });

    const row = {
        "fullname": req.body.fullname,
        "email_address": req.body.email_address,
        "password_hash": req.body.password_hash,
        "username": req.body.username
    }
    await userModel.insertOne(row)
    return handleSuccess(res, "", row)
}


module.exports = {
    getUserInfo,
    create
};
