const getMusic = require("../search/search");
const fs = require("fs");

const categories = ["house", "trance", "edm", "nightcore", "pop", "hip-hop", "rap", "rock", "metal", "country", "R&B", "indie"];
module.exports = app => {
    categories.forEach(category => {
        app.get(`/api/${category}`, (req, res) => {
            getMusic(`${category} music`);
            
            const dir = `./client/public/genres/${category}`;
            console.log(readFile(`${dir}/info/${category}.txt`));
            fs.readdir(dir, (err, files) => {
                res.send({
                    song:   `/genres/${category}/${files[0]}`,
                    info:   readFile(`${dir}/info/${category}.txt`)

                });
                res.end();
            });
        });
    });

    // read bytes from file and returns content
    function readFile(file) {
        return fs.readFileSync(file).toString().split('\n');
    }
};