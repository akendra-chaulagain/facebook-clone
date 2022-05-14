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
const verifyToken = require("../middleware/verify");
const { verifyUser, verifyAdmin } = require("../middleware/verify");

// update user
router.put("/:id", verifyToken, updateUser);

// delete user
router.delete("/:id", verifyToken, deleteUser);

// find by id
router.get("/find/:id", findUserById);

// get all user
router.get("/all", verifyToken, getAllUser);

// follow user
router.put("/:id/follow", followUser);

// unfollow user
router.put("/:id/unfollow", unFollowUser);

module.exports = router;
