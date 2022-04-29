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
    descBio: {
      type: String,
      default: "",
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
    study: {
      type: String,
      default: "+2 management",
    },
    hobbies: {
      type: Array,
      default: "cricket",
    },
    address: {
      type: String,
      default: "akendra_chaulagain",
    },
    insta: {
      type: String,
      default: "",
    },
    whatsapp: {
      type: String,
      default: "676576578",
    },
    relationship: {
      type: String,
      default: "single",
    },
    job: {
      type: String,
      default: "studing",
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
