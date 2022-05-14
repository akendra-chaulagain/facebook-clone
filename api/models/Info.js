const mongoose = require("mongoose");

const infoSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    coverPic: {
      type: Array,
      default: "",
    },
    bio: {
      type: String,
      default: "Bio",
    },
    study: {
      type: String,
      default: "study",
    },
    address: {
      type: String,
      default: "address",
    },
    insta: {
      type: String,
      default: "instagram",
    },
    whatsapp: {
      type: String,
      default: "whatsapp",
    },
    relationship: {
      type: String,
      default: "relationship",
    },
    job: {
      type: String,
      default: "student",
    },
  },
  { timestamps: true }
);

const Info = mongoose.model("INFO", infoSchema);
module.exports = Info;
