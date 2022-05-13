const express = require("express");
const router = express.Router();
const {
  createPost,
  updatePost,
  deletePost,
  findBYIdPost,
  getUserPostOnly,
  getAllPost,
  likeAndDisLikePost,
  timeLine,
} = require("../controllers/posts.controllers");
const { verifyUser } = require("../middleware/verify");

// create post
router.post("/create", verifyUser, createPost);

// update post
router.put("/:id", verifyUser, updatePost);

// delete post
router.delete("/:id", verifyUser, deletePost);

// find by id
router.get("/find/:id", findBYIdPost);

// get post according to user id in post
router.post("/find/individualpost", verifyUser, getUserPostOnly);

// get all post
router.get("/all", getAllPost);

// like and dislike post
router.put("/:id/like", verifyUser, likeAndDisLikePost);

// timeline
router.get("/timeline", verifyUser, timeLine);

module.exports = router;
