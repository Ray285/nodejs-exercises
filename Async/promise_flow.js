'use strict';

const fs = require('fs');
const path = require('path');

function readFile(path, encoding) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, encoding, function (err, data) {
            if (err) {
                return reject(err);
            }
            resolve(JSON.parse(data));
        });
    });
}

const readFilePromises = ['raymond.json', 'lizna.json'].map(function (item, cb) {
    return readFile(path.join(__dirname, item), 'utf-8');
})

Promise.all(readFilePromises)
  .then(function (result) {
      console.log(result);
  })
  .catch(function (err) {
     console.log(err);
  });
