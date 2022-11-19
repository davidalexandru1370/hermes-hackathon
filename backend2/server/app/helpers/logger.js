const bunyan = require("bunyan");
const packageJson = require("../../package.json");

const logger = bunyan.createLogger({
    name: "server",
    version: packageJson.version,
    streams: [{ stream: process.stdout, level: bunyan.TRACE}]
});
logger.info({ NODE_ENV: process.env.APP_ENV }, "API logger loaded");

module.exports = { bunyan, logger };
