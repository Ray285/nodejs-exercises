'use strict';

const fs = require('fs');
const path = require('path');

const async = require('async');

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

readFile(path.join(__dirname, 'samples.json'), 'utf-8')
    .then(function (data) {
        console.log('returned data from promise: ', data);
    })
    .catch(function (err) {
        console.log(err);
    });
