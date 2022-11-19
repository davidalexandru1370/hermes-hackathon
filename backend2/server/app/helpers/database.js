const Sequelize = require("sequelize");
const DataTypes = require("sequelize");
const { logger } = require("./logger");

const moduleLogger = logger.child({ module: "database" });

const https = require("https");
const agent = new https.Agent({
    keepAlive: true,
    maxSockets: 150
});

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: "mysql",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    logging: process.env.DB_DEBUG === "false" ? false : console.log,
    define: {
        timestamps: false
    },
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    timezone: `+0${((new Date(new Date().toLocaleString("en-US", { timeZone: "Europe/Bucharest" })).getTimezoneOffset() / 60) * -1).toString()}:00`,
    dialectOptions: {
        dateStrings: true,
        typeCast(field, next) {
            if (field.type === "DATETIME" || field.type === "DATE" || field.type === "TIMESTAMP") {
                return field.string();
            }
            return next();
        }
    }
});

const currentTimestamp = {
    toSqlString: () => {
        return "CURRENT_TIMESTAMP()";
    }
};

module.exports = {
    currentTimestamp,
    sequelize,
    DataTypes,
};
