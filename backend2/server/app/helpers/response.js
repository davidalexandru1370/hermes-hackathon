const _ = require("lodash");
const { validationResult } = require("express-validator");
//const { getTokenData } = require("./authentication");
const userModel = require("../models/userModel");

const emitValidationResponse = (res, errorArray) => {
    return res.status(422).json({
        success: false,
        status: 422,
        message: errorArray.length === 1 ? "There is a validation error." : "There are validation errors.",
        data: errorArray
    });
};

const handleSuccess = (res, message, data) => {
    return res.status(200).json({
        success: true,
        status: 200,
        message,
        data
    });
};

const validateRequest = async (req, res, options) => {
    // Handle validation error if the request is not valid
    const validationResponse = handleValidationError(req, res);
    if (validationResponse !== null) {
        return validationResponse;
    }
    return null;
};

const handleValidationError = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errorArray = errors.array();
        return emitValidationResponse(res, errorArray);
    }
    return null;
};

const handleCustomValidationError = (res, errorArray) => {
    return emitValidationResponse(res, errorArray);
};


module.exports = {
    handleSuccess,
    validateRequest,
    emitValidationResponse,
    handleValidationError,
    handleCustomValidationError
};
