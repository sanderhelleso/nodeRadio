const getMusic = require("../search/search");
const fs = require("fs");

const categories = ["house", "trance", "edm", "nightcore", "pop", "hip-hop", "rap", "rock", "metall", "country"];
module.exports = app => {
    categories.forEach(category => {
        app.get(`/api/${category}`, (req, res) => {
            getMusic(`${category} music`);
            
            const dir = `./client/public/genres/${category}`;
            fs.readdir(dir, (err, files) => {
                res.send(`/genres/${category}/${files[0]}`);
                res.destroy();
            });
        });
    });
};