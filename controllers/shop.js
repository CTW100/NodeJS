const { fetchAll } = require("../models/celebrity");
const Celebrity = require("../models/celebrity");

exports.getIndex = (req, res, next) => {
  res.render("shop/index", { celebs: celebs });
};

exports.getCelebrity = (req, res, next) => {
  Celebrity.fetchAll()
    .then((celebs) => {
      res.render("shop/celebrity", { celebs: celebs });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postCelebrity = (req, res, next) => {
  const celeb = new Celebrity(
    req.body.name,
    req.body.imageUrl,
    req.body.ratings,
    req.body.description
  );
  celeb.save();
  Celebrity.fetchAll()
    .then((result) => {
      res.redirect("/celebrity");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getMind = (req, res, next) => {
  res.render("shop/mind");
};

exports.getMine = (req, res, next) => {
  res.render("shop/mine");
};
