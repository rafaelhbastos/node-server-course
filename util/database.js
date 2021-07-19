const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect('mongodb+srv://rafaelpessoa12:' + process.env.MONGO_ATLAS_PW + '@cluster0.05jl7.mongodb.net/node_course?retryWrites=true&w=majority')
  .then(client => {
    console.log('Connected');
    _db = client.db();
    callback();
  })
  .catch(err => {
    console.log(err)
    throw err;
  });
};

const getDb = () => {
  if(_db) {
    return _db;
  }
  throw 'No database found';
}

exports.mongoConnect = mongoConnect
exports.getDb = getDb;


