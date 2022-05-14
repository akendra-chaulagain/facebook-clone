const express = require("express");
const router = express.Router();

const { registerUser, loginUser } = require("../controllers/auth.controllers");
// const { verifyToken, verifyUser } = require("../middleware/verify");

// register user
router.post("/register", registerUser);

// login user

router.post("/login", loginUser);

// router.get("/checkUser", verifyToken, (req, res, next) => {
//   res.send("you are login");
// });
// router.get("/checkUser/:id", verifyUser, (req, res, next) => {
//   res.send("you are login and you can delelt or update");
// });

module.exports = router;
