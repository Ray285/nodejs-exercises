const mongoose = require('mongoose');
const Picture = require('./picture');

const url = 'mongodb://nodeHero:nodeHero123@localhost:27017/nodehero';
mongoose.connect(url);

const tabbyCat = new Picture({
    category: 'FunnyCatGifs',
    name: 'OrangeCat',
    sourceUrl: 'http://www.catgifpage.com/gifs/318.gif'
});

tabbyCat.save()
    .then(function (queryResult) {
        console.log('queryResult:', queryResult);
        process.exit(0);
    })
    .catch(function (err) {
         console.log('err', err)
         process.exit(1);
    });
