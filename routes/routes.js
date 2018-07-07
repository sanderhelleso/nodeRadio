const getMusic = require("../search/search");
const fs = require("fs");

const categories = ["house", "trance", "edm", "nightcore", "pop", "hip-hop", "rap", "rock", "metal", "country", "R&B", "indie"];
module.exports = app => {
    categories.forEach(category => {
        app.get(`/api/${category}`, (req, res) => {
            //getMusic(`${category} music`);
            
            const dir = `./client/public/genres/${category}`;
            console.log(readFile(`${dir}/info/${category}.txt`));
            fs.readdir(dir, (err, files) => {
                res.send({
                    song:   `/genres/${category}/${files[0]}`,
                    info:   readFile(`${dir}/info/${category}.txt`, true),
                    link:   readFile(`${dir}/info/${category}.txt`, false)

                });
                res.end();
            });
        });
    });

    // read bytes from file and returns content
    function readFile(file, mode) {
        const fileInfo = fs.readFileSync(file).toString().split("|---|");
        const title = fileInfo[0].toUpperCase();
        const link = fileInfo[1];

        if (mode) {
            if (title.split("(") === undefined) {
                return title.toUpperCase();
            }
    
            else {
                return title.toUpperCase().split("(")[0];
            }
        }

        else {
            return link;
        }
    }
};