const express = require("express");

const router = express.Router();

const adminController = require("../controllers/admin");

router.get("/add-episode", adminController.addEpisode);

router.get("/add-celebrity", adminController.adminEpisode);

module.exports = router;
