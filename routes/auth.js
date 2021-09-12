const express = require("express");

const authContrller = require("../controller/auth");

const router = express.Router();

router.get("/login", authContrller.getLogin);

router.post("/login", authContrller.postLogin);

module.exports = router;
