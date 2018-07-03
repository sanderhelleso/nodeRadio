const getMusic = require("../search/search");

module.exports = app => {
    app.get("/house", (req, res) => {
        getMusic("house");
    });
};