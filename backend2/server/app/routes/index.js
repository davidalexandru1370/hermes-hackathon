module.exports = (app) => {
    app.route("/").get((_req, res) => {
        return res.send({
            success: true,
            status: 200,
            message: "API is on",
            data: {
                serverStatus: "Active",
                version: "1.0.0"
            }
        });
    });

    app.use("/user", require("./collections/user.js"));
};
