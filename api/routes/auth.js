const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

// User model
const User = require("../models/User");
// database
require("../DataBase/DB");

// register user
router.post("/register", async (req, res) => {
  const { firstname, lastname, contact, password, email } = req.body;
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
  const { password, email } = req.body;
  if (!password || !email) {
    return res.status(401).json("Enter all the data");
  }
  try {
    //   find user email from database
    const user = await User.findOne({ email });
    if (user) {
      // check user password with hashed password stored in the database
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const { password, ...others } = user._doc;
        return res.status(201).json(others);
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
