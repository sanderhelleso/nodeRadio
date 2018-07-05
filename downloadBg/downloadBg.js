const https = require('https');
const fs = require('fs');
const request = require('request');

function downloadBg(uri, filename, callback) {
    request.head(uri, (err, res, body) => {
      console.log('content-type:', res.headers['content-type']);
      console.log('content-length:', res.headers['content-length']);
  
      request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
  };
  
  downloadBg('https://source.unsplash.com/random/1920x1080', './client/public/img/background/player.jpg', () => {
    console.log('done');
  });