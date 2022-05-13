const express = require("express");
const router = express.Router();
const {
  unFollowUser,
  updateUser,
  deleteUser,
  findUserById,
  getAllUser,
  followUser,
} = require("../controllers/users.controllers");

// update user
router.put("/:id", updateUser);

// delete user
router.delete("/:id", deleteUser);

// find by id
router.get("/find/:id", findUserById);

// get all user
router.get("/all", getAllUser);

// follow user
router.put("/:id/follow", followUser);

// unfollow user
router.put("/:id/unfollow", unFollowUser);

module.exports = router;
