const https = require('https');
const fs = require('fs');
const path = require('path');
const request = require('request');
const gm = require("gm");


// download img with headers
function downloadBg(uri, filename, callback) {
    request.head(uri, (err, res, body) => {
        if (err) {
            throw err;
        }
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
  };
  
  // download new radio wallpaper every min
  setInterval(() => {
    for (let i = 1; i < 11; i++) {
        setTimeout(() => {
            downloadBg('https://source.unsplash.com/random/1920x1080', `./client/public/img/background/radio${i}.jpg`, () => {
                
                // compress img to smaller size
                gm(`./client/public/img/background/radio${i}.jpg`).compress("JPEG");
            });
        }, i * 6000);
    };
  }, 60000);