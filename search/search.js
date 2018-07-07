const search = require("youtube-search");
const fs = require("fs");
const ytdl = require('ytdl-core');

const opts = {
  maxResults: 50,
  type: "video",
  videoDuration: "short",
  videoDefinition: "high",
  key: process.env.YOUTUBE_API_KEY
};

module.exports = category => {
    search(category, opts, function (err, results) {
        if (err) {
            return console.log(err);
        }

        let count = 0;
        results.forEach(result => {
            count++;
            const genre = category.split(" ")[0];
            const filePath = `./client/public/genres/${genre}/`;
            const fileName = `${filePath}${genre}${count}.mp4`;

            // get song
            //ytdl(result.link, { filter: (format) => format.container === 'mp4' })
            //.pipe(fs.createWriteStream(fileName));

            //createInfoFile(`${filePath}/info/`, genre, result, count);
        });
    })
};

// create file and dir to contain song data
function createInfoFile(dir, genre, result, count) {

    // create info dir if missing
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
        console.log(dir);
    }

    // file to read current song info
    console.log(count);
    fs.writeFile(`${dir}${genre}${count}.txt`, `${result.title} |---| ${result.link}`, function (err) {
        if (err) {
            throw err;
        }
    });
}