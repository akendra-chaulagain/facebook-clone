const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    infoId: {
      type: String,
      required: true,
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
