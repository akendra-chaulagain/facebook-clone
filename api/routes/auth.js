const express = require("express");
const router = express.Router();


const { registerUser, loginUser } = require("../controllers/auth.controllers");


// register user
router.post("/register", registerUser);

// login user
router.post("/login", loginUser);

module.exports = router;
