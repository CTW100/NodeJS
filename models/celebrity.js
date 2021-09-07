const getDb = require("../utils/database").getDb;

class Celebrity {
  constructor(name, imageUrl, ratings, description) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.ratings = ratings;
    this.description = description;
  }

  save() {
    const db = getDb();
    return db.collection("celebrities").insertOne(this);
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection("celebrities")
      .find()
      .toArray()
      .then((celebs) => {
        console.log(celebs);
        return celebs;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = Celebrity;
