'use strict';

const fs = require('fs');
const path = require('path');
const async = require('async');

function readFile (path, encoding, callback) {
    fs.readFile(path, encoding, function (err, data) {
        if (err) {
            return callback(err);
        }
        console.log('data:', data);
        callback(null, JSON.parse(data));
    });
}

async.map(['raymond.json', 'lizna.json'], function (item, cb) {
    readFile(path.join(__dirname, item), 'utf-8', cb);
}, function (err, result) {
    if (err) {
        console.log('err:', err);
    }
    console.log('result:', result);
});
