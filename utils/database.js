const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const MongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://sunbelt:sohkaniz65@cluster0.c0d1i.mongodb.net/shop?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("Connected!");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "Np database found!";
};

exports.MongoConnect = MongoConnect;
exports.getDb = getDb;
