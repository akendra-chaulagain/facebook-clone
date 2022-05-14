const express = require("express");
const {
  createInfo,
  updateInfo,
  deleteInfo,
  findByIdInfo,
  individualInfo,
  getAllInfo,
} = require("../controllers/info.controllers");
const verifyToken = require("../middleware/verify");
const { verifyUser, verifyAdmin } = require("../middleware/verify");
const router = express.Router();

// create info
router.post("/create", verifyToken, createInfo);

// update post
router.put("/:id", verifyToken, updateInfo);

// delete post
router.delete("/:id", verifyToken, deleteInfo);

// find by id
router.get("/find/:id", verifyToken, findByIdInfo);

// get individual info according to user id given in info
router.post("/find/individualpost", verifyToken, individualInfo);

// get all info
router.get("/", getAllInfo);

module.exports = router;
