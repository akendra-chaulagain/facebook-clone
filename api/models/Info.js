const mongoose = require("mongoose");

const InfoSchema = new mongoose.Schema(
  {
    desc: {
      type: String,
    },
    study: {
      type: String,
    },
    hobbies: {
      type: String,
    },
    address: {
      type: String,
    },
    insta: {
      type: String,
    },
    whatsapp: {
      type: String,
    },
    relationship: {
      type: Number,
      enum: [1, 2, 3],
    },
    job: {
      type: String,
    },
  },
  { timestamps: true }
);

const Info = mongoose.model("INFO", InfoSchema);
module.exports = Info;
