const express = require("express");
const {
  createInfo,
  updateInfo,
  deleteInfo,
  findByIdInfo,
  individualInfo,
  getAllInfo,
} = require("../controllers/info.controllers");
const verifyUser = require("../middleware/verify");
const router = express.Router();

// create info
router.post("/create", verifyUser, createInfo);

// update post
router.put("/:id", verifyUser, updateInfo);

// delete post
router.delete("/:id", verifyUser, deleteInfo);

// find by id
router.get("/find/:id", verifyUser, findByIdInfo);

// get individual info according to user id given in info
router.post("/find/individualpost", individualInfo);

// get all info
router.get("/", getAllInfo);

module.exports = router;
