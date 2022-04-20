const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

// User model
const User = require("../models/User");
// database
require("../DataBase/DB");

// update user
router.put("/:id", async (req, res) => {
  try {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(12);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(201).json(updateUser);
  } catch (error) {
    return res
      .status(401)
      .json("unable to update. something went wrong" + error);
  }
});
// delete user
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    return res.status(201).json({ message: "delete success ", user });
  } catch (error) {
    return res
      .status(401)
      .json("unable to delete. something went wrong" + error);
  }
});

module.exports = router;

// find by id
router.get("/find/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    return res.status(201).json(user);
  } catch (error) {
    return res
      .status(401)
      .json("unable to get user. something went wrong" + error);
  }
});

module.exports = router;
