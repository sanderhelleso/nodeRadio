const getMusic = require("../search/search");
const fs = require("fs");

const categories = ["house", "trance", "edm", "nightcore", "pop", "hip-hop", "rap", "rock", "metall", "country"];
module.exports = app => {
    categories.forEach(category => {
        app.get(`/api/${category}`, (req, res) => {
            getMusic(`${category} music`);
            
            const dir = `./videos/${category}`;
            fs.readdir(dir, (err, files) => {
                console.log(123);
                res.send(`${dir}/${files[0]}`);
            })
        });
    });
};