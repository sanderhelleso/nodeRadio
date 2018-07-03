const getMusic = require("../search/search");
const fs = require("fs");

const categories = ["house", "trance", "edm", "nightcore", "pop", "hip-hop", "rap", "rock", "metall", "country"];
module.exports = app => {
    categories.forEach(category => {
        app.get(`/${category}`, (req, res) => {
            getMusic(`${category} music`);
            
            const dir = `./videos/${category}`;
            fs.readdir(dir, (err, files) => {
                res.send(`${dir}/${files[0]}`);
            })
        });
    });
};