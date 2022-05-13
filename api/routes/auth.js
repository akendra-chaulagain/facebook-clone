const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

// User model
const User = require("../models/User");
// database
require("../DataBase/DB");

// register user
router.post("/register", async (req, res) => {
  const {
    firstname,
    lastname,
    contact,
    password,
    email,
    profilePic,
    coverPic,
  } = req.body;
  if (!firstname || !lastname || !contact || !password || !email) {
    return res.status(401).json("Enter all the data");
  }
  try {
    //   if the email is already exist this code will run
    const userEmail = await User.findOne({ email });
    if (userEmail) {
      return res.status(401).json("Email already exist");
    } else {
      // if everything is good then this code will run
      const user = new User({
        firstname,
        lastname,
        contact,
        password,
        email,
        profilePic,
        coverPic,
      });
      // generate salt to hash password
      const salt = await bcrypt.genSalt(12);
      // now we set user password to hashed password
      user.password = await bcrypt.hash(user.password, salt);
      const result = await user.save();
      return res.status(201).json(result);
    }
  } catch (error) {
    console.log("unable to register user" + error);
  }
});

// login user
router.post("/login", async (req, res) => {
  const { password, email, contact } = req.body;

  try {
    //   find user email and contact no  from database and according to email and contact number  user will login
    const user = await User.findOne({
      $or: [{ email }, { contact }],
    });
    if (user) {
      // check user password with hashed password stored in the database
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const { password, ...others } = user._doc;
        // implementing jsonweb token
        const token = jwt.sign(
          { id: user._id, isAdmin: user.isAdmin },
          process.env.JWT_SECRET_KEY,
          { expiresIn: "20m" }
        );
        // saving in cookie
        res.cookie("jsonwebToken", token, {
          path: "/",
          httpOnly: true,
          sameSite: "lax",
        });

        return res.status(201).json({ others, token });
      } else {
        return res.status(401).json("Invalid data");
      }
    } else {
      return res.status(401).json("Invalid data");
    }
  } catch (error) {
    console.log("user doesnot exist " + error);
  }
});

module.exports = router;
