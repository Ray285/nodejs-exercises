const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const request = require('request-promise');

const PictureSchema = new Schema({
    name: String,
    category: String,
    sourceUrl: String,
    createdAt: { type: Date, default: Date.now },
    file: Buffer
});

PictureSchema.pre('save', function (next) {
    console.log('PreSave called!');
    const document = this;
    request.get(this.sourceUrl)
        .then(function (response) {
            console.log('got response!');
            document.file = Buffer.from(response);
            next();
        })
        .catch(function (err) {
            next(err);
        })
});

module.exports = mongoose.model('Picture', PictureSchema);
