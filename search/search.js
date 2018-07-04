const search = require("youtube-search");
const fs = require("fs");
const ytdl = require('ytdl-core');

const opts = {
  maxResults: 1,
  type: "video",
  videoDuration: "short",
  videoDefinition: "high",
  order: "viewCount",
  key: process.env.YOUTUBE_API_KEY
};

module.exports = category => {
    search(category, opts, function (err, results) {
        if (err) {
            return console.log(err);
        }

        results.forEach(result => {
            const genre = category.split(" ")[0];
            const filePath = `./client/public/genres/${genre}/`;
            const fileName = `${filePath}${Math.random()}.mp4`;

            // get song
            //ytdl(result.link, { filter: (format) => format.container === 'mp4' })
            //.pipe(fs.createWriteStream(fileName));

            createInfoFile(`${filePath}/info/`, genre, result);
        });
    })
};

// create file and dir to contain song data
function createInfoFile(dir, genre, result) {

    // create info dir if missing
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
        console.log(dir);
    }

    // file to read current song info
    fs.writeFile(`${dir}${genre}.txt`, `${result.title} |---| ${result.link}`, function (err) {
        if (err) {
            throw err;
        }
        console.log('Saved!');
    });
}