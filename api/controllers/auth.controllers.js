const User = require("../models/User");
require("../DataBase/DB");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const createError = require("../utils/error");

// register user
const registerUser = async (req, res, next) => {
  const {
    firstname,
    lastname,
    contact,
    password,
    email,
    gender,
    birthday,
    profilePic,
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
        gender,
        birthday,
        profilePic,
      });
      // generate salt to hash password
      const salt = await bcrypt.genSalt(12);
      // now we set user password to hashed password
      user.password = await bcrypt.hash(user.password, salt);

      // implementing jsonweb token
      const token = jwt.sign(
        { id: user._id, isAdmin: user.isAdmin },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "1hr" }
      );
      // saving in cookie
      res.cookie("jsonwebToken", token, {
        expires: new Date(Date.now() + 1000 * 60 * 60),
        path: "/",
        httpOnly: true,
        sameSite: "lax",
      });
      const others = await user.save();
      return res.status(201).json({ others, token });
    }
  } catch (err) {
    next(createError(401, "unable to register"));
  }
};

//login
const loginUser = async (req, res, next) => {
  const { password, email, contact } = req.body;

  try {
    //   find user email and contact no  from database and according to email and contact number  user will login
    const user = await User.findOne({
      $or: [{ email }, { contact }],
    });
    if (user) {
      // check user password with hashed password stored in the database
      const isMatch = await bcrypt.compare(password, user.password);
      // implementing jsonweb token
      const token = jwt.sign(
        { id: user._id, isAdmin: user.isAdmin },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "1hr" }
      );
      // saving in cookie
      res.cookie("jsonwebToken", token, {
        expires: new Date(Date.now() + 1000 * 60 * 60),
        path: "/",
        httpOnly: true,
        sameSite: "lax",
      });
      if (isMatch) {
        const { password, ...others } = user._doc;
        return res.status(201).json({ others, token });
      } else {
        return res.status(401).json("Invalid data");
      }
    } else {
      return res.status(401).json("Invalid data");
    }
  } catch (error) {
    next(createError(401, "user does not exist"));
  }
};

// logout user
// logout user
const logOutUser = async (req, res) => {
  const cookie = req.headers.cookie;
  if (cookie) {
    const token = cookie.split("=")[1];
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) res.status(403).json("Token is not valid !");
      req.user = user;
    });
    res.clearCookie("jsonwebToken");
    req.cookies[`jsonwebToken`] = "";
    return res.status(200).json("LogOut successfully..");
  }
};

module.exports = { registerUser, loginUser, logOutUser };
