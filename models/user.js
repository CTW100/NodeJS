const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;

const ObjectId = mongodb.ObjectID;

class User {
  constructor(username, eamil) {
    this.name = username;
    this.eamil = eamil;
  }

  save() {
    const db = getDb();
    return db.collection("users").insertOne(this);
  }

  static findById(userId) {
    const db = getDb();
    return db.collection("users").findOne({ _id: new ObjectId(userId) });
  }
}

module.exports = User;
