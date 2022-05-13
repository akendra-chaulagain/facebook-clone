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

// create post
router.post("/create", createPost);

// update post
router.put("/:id", updatePost);

// delete post
router.delete("/:id", deletePost);

// find by id
router.get("/find/:id", findBYIdPost);

// get post according to user id in post
router.post("/find/individualpost", getUserPostOnly);

// get all post
router.get("/all", getAllPost);

// like and dislike post
router.put("/:id/like", likeAndDisLikePost);

// timeline
router.get("/timeline", timeLine);

module.exports = router;
