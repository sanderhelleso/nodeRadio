const getMusic = require("../search/search");

const categories = ["house", "trance", "edm", "nightcore", "pop", "hip-hop", "rap", "rock", "metall", "country"];
const playing = [];
module.exports = app => {
    categories.forEach(category => {
        app.get(`/${category}`, (req, res) => {
            getMusic(`${category} music`);
        });
    });
};