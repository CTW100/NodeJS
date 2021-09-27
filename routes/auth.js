const express = require("express");
const { check, body } = require("express-validator/check"); // What this does is in the end it just gives us a check function which we import from this package here

const authController = require("../controllers/auth");
const User = require("../models/user");

const router = express.Router();

router.get("/login", authController.getLogin);

router.get("/signup", authController.getSignup);

router.post("/login", authController.postLogin);

router.post(
  "/signup",
  [
    check("email")
      .isEmail()
      .withMessage("Please enter a valid email.")
      .custom((value, { req }) => {
        // if (value === "test@test.com") {
        //   throw new Error("This email address is forbidden");
        // }
        // return true;
        return User.findOne({ email: value }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject(
              //296. 2m 30s
              "E-Mail exists already, please pick a different one."
            );
          }
        });
      }),
    body(
      "password",
      "Please enter a password with only numbers and text and al least 5 characters."
    ) // this will be used as a default error message for all your validators
      .isLength({ min: 5 })
      .isAlphanumeric(),
    body.name("confirmPassword").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords have to match!");
      }
      return true;
    }),
  ], // array => make it read clear &&&& please check password value in the body of the request
  authController.postSignup
);

router.post("/logout", authController.postLogout);

router.get("/reset", authController.getReset);

router.post("/reset", authController.postReset);

router.post("/reset/:token", authController.getNewPassword);

router.post("/new-password", authController.postNewPassword);

module.exports = router;
