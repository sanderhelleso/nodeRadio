// ES6
'use strict'

// vals
const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const dotenv = require("dotenv").load();
const search = require("youtube-search");
const fs = require('fs');
const ytdl = require('ytdl-core');

const opts = {
  maxResults: 3,
  type: "video",
  videoDuration: "short",
  videoDefinition: "high",
  order: "viewCount",
  key: process.env.YOUTUBE_API_KEY
};

function search() {
  search("house music", opts, function(err, results) {
    if(err) return console.log(err);
   
    results.forEach(result => {
      console.log(result.link);
      console.log(result.title);
      const fileName = `videos/${Math.random()}.mp4`
      //ytdl(result.link, { filter: (format) => format.container === 'mp4' })
      //.pipe(fs.createWriteStream(fileName));
    })
  });
}

// app
const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 5000;;
const host = process.env.HOST || 'localhost';

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// start server
server.listen(port, host);
console.log(`Magic is happening on ${port}`);