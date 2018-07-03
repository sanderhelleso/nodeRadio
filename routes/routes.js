const getMusic = require("../search/search");
const fs = require("fs");

const categories = ["house", "trance", "edm", "nightcore", "pop", "hip-hop", "rap", "rock", "metall", "country"];
module.exports = app => {
    categories.forEach(category => {
        app.get(`/${category}`, (req, res) => {
            const song = getMusic(`${category} music`);
            fs.readdir(`./videos/${category}`, (err, files) => {
                res.send(files[0]);
            })
        });
    });
};