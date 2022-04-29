const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    desc: {
      type: String,
    },
    img: {
      type: Array,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("POST", postSchema);
module.exports = Post;
