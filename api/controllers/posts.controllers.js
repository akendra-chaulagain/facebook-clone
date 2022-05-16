// post model
const Post = require("../models/Post");
const User = require("../models/User");
// database
require("../DataBase/DB");

// create post
const createPost = async (req, res, next) => {
  const body = req.body;
  try {
    const post = new Post(body);
    const result = await post.save();
    return res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

// update post
const updatePost = async (req, res, next) => {
  try {
    const updatePost = await Post.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(201).json(updatePost);
  } catch (err) {
    next(err);
  }
};

// delete post
const deletePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    return res.status(201).json({ message: "postdeleted ", post });
  } catch (err) {
    next(err);
  }
};
// find by id
const findBYIdPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    return res.status(201).json(post);
  } catch (err) {
    next(err);
  }
};

// find user post according to userId send in post
const getUserPostOnly = async (req, res, next) => {
  const { userId } = req.body;
  try {
    const getIndividulaPost = await Post.find({ userId }).sort({
      _id: -1,
    });
    return res.status(201).json(getIndividulaPost);
  } catch (err) {
    next(err);
  }
};


// get all post
const getAllPost = async (req, res, next) => {
  try {
    const post = await Post.find().sort({ _id: -1 });
    return res.status(201).json(post);
  } catch (err) {
    next(err);
  }
};

// like and dislike post
const likeAndDisLikePost = async (req, res, next) => {
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
  } catch (err) {
    next(err);
  }
};

// timeline
const timeLine = async (req, res, next) => {
  try {
    const currentUser = await User.findById(req.body.userId);
    const userPosts = await Post.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.followins.map((friendId) => {
        Post.find({ userId: friendId });
      })
    );
    return res.json(userPosts.concat(...friendPosts));
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createPost,
  updatePost,
  deletePost,
  likeAndDisLikePost,
  timeLine,
  getAllPost,
  getUserPostOnly,
  findBYIdPost,
};
