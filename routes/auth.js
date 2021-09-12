const express = require("express");

const authContrller = require("../controller/auth");

const router = express.Router();

router.get("/login", authContrller.getLogin);

module.exports = router;
