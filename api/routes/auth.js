const express = require("express");
const router = express.Router();

// User model
const User = require("../models/User")

// register user
router.get("/register", (req, res) => {
  res.send("Akendra chaulagain from home page");
});

module.exports = router;
