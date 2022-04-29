const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      min: 6,
    },
    profilePic: {
      type: String,
      default: "",
    },
    coverPic: {
      type: String,
      default: "",
    },
    followers: {
      type: Array,
      default: [],
    },
    followins: {
      type: Array,
      default: [],
    },
    desc: {
      type: String,
      default: "",
    },
    study: {
      type: String,
      default: "",
    },
    hobbies: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
    insta: {
      type: String,
      default: "",
    },
    whatsapp: {
      type: String,
      default: "",
    },
    relationship: {
      type: Number,
      enum: [1, 2, 3],
    },
    job: {
      type: String,
      default: "",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("USER", userSchema);
module.exports = User;
