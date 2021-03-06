const bcrypt = require("bcrypt");

// User model
const User = require("../models/User");
// database
require("../DataBase/DB");

const updateUser = async (req, res, next) => {
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
  } catch (err) {
    next(err);
  }
};

// delete user
const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    return res.status(201).json({ message: "delete success ", user });
  } catch (err) {
    next(err);
  }
};

// find by id
const findUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

// get all user
const getAllUser = async (req, res, next) => {
  try {
    const user = await User.find();
    return res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

// follow user
const followUser = async (req, res, next) => {
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
};

// unfollow user
const unFollowUser = async (req, res, next) => {
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
};

module.exports = {
  updateUser,
  deleteUser,
  findUserById,
  getAllUser,
  followUser,
  unFollowUser,
};
