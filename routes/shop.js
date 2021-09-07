const express = require("express");

const router = express.Router();

const shopController = require("../controllers/shop");

router.get("/", shopController.getIndex);

router.get("/celebrity", shopController.getCelebrity);

router.post("/add-celebrity", shopController.postCelebrity);

router.get("/mind", shopController.getMind);

router.get("/mine", shopController.getMine);

module.exports = router;
