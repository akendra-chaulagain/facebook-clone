const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  logOutUser,
} = require("../controllers/auth.controllers");

// register user
router.post("/register", registerUser);

// login user

router.post("/login", loginUser);

// logout user
router.post("/logout", logOutUser);

module.exports = router;
