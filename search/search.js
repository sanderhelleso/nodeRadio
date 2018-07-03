const search = require("youtube-search");

const opts = {
  maxResults: 3,
  type: "video",
  videoDuration: "short",
  videoDefinition: "high",
  order: "viewCount",
  key: process.env.YOUTUBE_API_KEY
};

module.exports = function(category) {
    search: search(category, opts, function (err, results) {
        if (err) {
            return console.log(err);
        }

        results.forEach(result => {
            console.log(result.link);
            console.log(result.title);
            const fileName = `videos/${Math.random()}.mp4`
            //ytdl(result.link, { filter: (format) => format.container === 'mp4' })
            //.pipe(fs.createWriteStream(fileName));
        })
    })
};