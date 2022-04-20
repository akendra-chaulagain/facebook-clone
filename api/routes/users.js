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

// find by id
router.get("/find/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, updatedAt, ...others } = user._doc;
    return res.status(201).json(others);
  } catch (error) {
    return res
      .status(401)
      .json("unable to get user. something went wrong" + error);
  }
});
// get all user
router.get("/all", async (req, res) => {
  try {
    const user = await User.find();
    return res.status(201).json(user);
  } catch (error) {
    return res.status(401).json("unable to get all user" + error);
  }
});

// follow user
router.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { followins: req.params.id } });
        res.status(200).json("user has been followed");
      } else {
        res.status(403).json("you already follow this user");
      }
    } catch (error) {
      res.status(500).json("follow error" + error);
    }
  } else {
    res.status(403).json("you cannot follow yourself");
  }
});

// unfollow user
router.put("/:id/unfollow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { followins: req.params.id } });
        res.status(200).json("user has been unfollowed");
      } else {
        res.status(403).json("already unfollow this user");
      }
    } catch (error) {
      res.status(500).json("follow error" + error);
    }
  } else {
    res.status(403).json("you cannot unfollow yourself");
  }
});

module.exports = router;
