const MongoClient = require('mongodb').MongoClient;
const seed = require('./seed');

const url = 'mongodb://nodeHero:nodeHero123@localhost:27017/nodehero';
MongoClient.connect(url, function (err, connection) {
    if (err) {
        console.log(err);
    }

    const pictures = connection.collection('pictures');
    // pictures.insertOne({
    //     name: 'WutangLogo',
    //     url: 'https://s-media-cache-ak0.pinimg.com/originals/61/66/96/6166964c618be90273867637fcefa49a.png'
    // })
    //   .then(function (queryResult) {
    //       console.log(queryResult);
    //       process.exit(0);
    //   })
    //   .catch(function (err) {
    //      console.log(err);
    //      process.exit(1);
    //   });
    pictures.find({}).toArray()
      .then(function (documents) {
          if (documents.length === 0) {
              return pictures.insertMany(seed);
          }
      })
      .then(function () {
          return pictures.find({
             $or: [
                 {
                     name: /(Smart|American)/
                 },
                 {
                     category: 'BlackPeopleTwitter'
                 }
             ]
         }).toArray();
      })
      .then(function (documents) {
          console.log('documents:', documents);
          process.exit(0);
      })
      .catch(function (documents) {
         console.log(err);
         process.exit(1);
      });
});
