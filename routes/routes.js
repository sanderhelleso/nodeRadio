const getMusic = require("../search/search");
const fs = require("fs");

const categories = ["house", "trance", "edm", "nightcore", "pop", "hip-hop", "rap", "rock", "metal", "country", "R&B", "indie"];
module.exports = app => {
    categories.forEach(category => {
        app.get(`/api/${category}`, (req, res) => {
            getMusic(`${category} music`);
            
            const dir = `./client/public/genres/${category}`;
            fs.readdir(dir, (err, files) => {
                res.send({
                    song:   `/genres/${category}/${files[0]}`,
                    info: "123test321" 
                });
                res.end();
            });
        });
    });
};