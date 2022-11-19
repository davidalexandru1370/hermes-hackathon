const _ = require("lodash");
const moment = require("moment");
const { matchedData } = require("express-validator");
const fs = require("fs")

const userModel = require("../models/userModel");

const { logger } = require("../helpers/logger");
const { handleSuccess, validateRequest, handleValidationError} = require("../helpers/response")
const path = require("path");

const create = async (req, res) => {
    const row = {
        "fullname": req.body.fullname,
        "email_address": req.body.email_address,
        "password_hash": req.body.password_hash,
        "username": req.body.username
    }
    await userModel.insertOne(row)
    return handleSuccess(res, "", row)
}


const add_pdf = async(req, res) => {
    if (req.file) {
        if (req.file.mimetype !== "application/pdf") {
            fs.unlinkSync(req.file.path)
            return res.status(400).json({
                success: true,
                status: 400,
                message: "",
                data: "Fisierul trebuie sa fie in formatul PDF!"
            });
        }
        return handleSuccess(res, "", "")
    }
}

const get_pdf = async(req, res) => {
    const options = {
        root: path.join(__dirname, '../../app/internal_storage'),
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    }
    const fileName = `${req.body.id}.pdf`
    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.log(err)
            return res.status(400).json({
                success: true,
                status: 400,
                message: "",
                data: "Eroare, nu s-a gasit fisier!"
            });
        } else {
            console.log('Sent:', fileName)
        }
    })
}

module.exports = {
    create,
    add_pdf,
    get_pdf
};
