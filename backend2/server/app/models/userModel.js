const _ = require("lodash");
const bcrypt = require("bcryptjs");
const { Op } = require("sequelize");
const moment = require("moment");
const { sequelize, DataTypes, withCache } = require("../helpers/database");
const { logger } = require("../helpers/logger");

const controllerName = "userController";

let max_page_admin = 0;
const userRole = {
    administrator: 1339,
    profesor: 1338,
    lector: 1337,
    user: 0
};

const User = sequelize.define(
    "users",
    {
        fullname: DataTypes.STRING,
        email_address: DataTypes.STRING,
        password_hash: DataTypes.STRING,
        username: DataTypes.STRING,
    },
    {
        timestamps: false
    }
);

const countAll = async () => {
    return await User.count();
};

const find = async (paramId) => {
    const passwordHash = bcrypt.hashSync("hamka", bcrypt.genSaltSync(+process.env.BCRYPT_SALTING_ROUND));
    console.log(passwordHash + "#")
    const row = {
        "fullname": "Robert-Daniel",
        "email_address": "dragomirrobert52@gmail.com",
        "password_hash": passwordHash,
        "username": "robi1239"
    }
    await User.create(row);
};

const insertOne = async (row) => {
    logger.info(row)
    const passwordHash = bcrypt.hashSync(row.password_hash, bcrypt.genSaltSync(+process.env.BCRYPT_SALTING_ROUND));
    row.password_hash = passwordHash
    await User.create(row);
    return []
}

module.exports = {
    countAll,
    find,
    insertOne
};
