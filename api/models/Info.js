const mongoose = require("mongoose");

const InfoSchema = new mongoose.Schema(
  {
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
  },
  { timestamps: true }
);

const Info = mongoose.model("INFO", InfoSchema);
module.exports = Info;
