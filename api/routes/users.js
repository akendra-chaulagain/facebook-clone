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
const { verifyUser, verifyAdmin } = require("../middleware/verify");

// update user
router.put("/:id", verifyUser, updateUser);

// delete user
router.delete("/:id", verifyUser, deleteUser);

// find by id
router.get("/find/:id", findUserById);

// get all user
router.get("/all",verifyUser, getAllUser);

// follow user
router.put("/:id/follow", followUser);

// unfollow user
router.put("/:id/unfollow", unFollowUser);

module.exports = router;
