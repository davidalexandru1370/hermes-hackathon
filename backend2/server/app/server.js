require('dotenv').config()
const express = require('express')
const app = express()
const { logger } = require("./helpers/logger");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true, limit: "5MB" }));
app.use(bodyParser.json({ limit: "5MB" }));

const port = process.env.PORT || 3000;
require("./routes")(app);


app.listen(port, () => {
    logger.info(`Application started on port ${port}`)
})

logger.info(process.env.DB_HOST)
