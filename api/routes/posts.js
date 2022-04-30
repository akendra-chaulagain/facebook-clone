const express = require("express");
const router = express.Router();

// User model
const Post = require("../models/Post");
const User = require("../models/User");
// database
require("../DataBase/DB");

// create post
router.post("/create", async (req, res) => {
  const body = req.body;
  try {
    const post = new Post(body);
    const result = await post.save();
    return res.status(200).json(result);
  } catch (error) {
    console.log("unable to create post" + error);
  }
});

// update post
router.put("/:id", async (req, res) => {
  try {
    const updatePost = await Post.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(201).json(updatePost);
  } catch (error) {
    return res
      .status(401)
      .json("unable to update Post. something went wrong" + error);
  }
});
// delete post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    return res.status(201).json({ message: "postdeleted ", post });
  } catch (error) {
    return res
      .status(401)
      .json("unable to delete post. something went wrong" + error);
  }
});

// find by id
router.get("/find/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    return res.status(201).json(post);
  } catch (error) {
    return res
      .status(401)
      .json("unable to get post. something went wrong" + error);
  }
});
router.post("/find/individualpost", async (req, res) => {
  const { userId } = req.body;
  try {
    const getIndividulaPost = await Post.find({ userId }).sort({
      _id: -1,
    });
    return res.status(201).json(getIndividulaPost);
  } catch (error) {
    return res
      .status(401)
      .json("unable to get individual post. something went wrong" + error);
  }
});

// get all post
router.get("/all", async (req, res) => {
  try {
    const post = await Post.find().sort({ _id: 1 });
    return res.status(201).json(post);
  } catch (error) {
    return res
      .status(401)
      .json("unable to get all post. something went wrong" + error);
  }
});

// like and dislike post
router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      //   await post.updateOne({ $push: { likes: req.body.userId } });
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json(post);
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json("post has been disliked");
    }
  } catch (error) {
    res.status(500).json("like error" + error);
  }
});

// timeline
router.get("/timeline", async (req, res) => {
  try {
    const currentUser = await User.findById(req.body.userId);
    const userPosts = await Post.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.followins.map((friendId) => {
        Post.find({ userId: friendId });
      })
    );
    return res.json(userPosts.concat(...friendPosts));
  } catch (error) {
    res.status(500).json("timeline error" + error);
  }
});

module.exports = router;
