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
            const fileName = `./client/public/genres/${category.split(" ")[0]}/${Math.random()}.mp4`;
            //ytdl(result.link, { filter: (format) => format.container === 'mp4' })
            //.pipe(fs.createWriteStream(fileName));
        });
    })
};