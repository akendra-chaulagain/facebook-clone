const express = require("express");
const { createInfo, updateInfo, deleteInfo, findByIdInfo, individualInfo, getAllInfo } = require("../controllers/info.controllers");
const router = express.Router();


// create info
router.post("/create", createInfo);

// update post
router.put("/:id", updateInfo);

// delete post
router.delete("/:id", deleteInfo);

// find by id
router.get("/find/:id", findByIdInfo);

// get individual info according to user id given in info
router.post("/find/individualpost", individualInfo);

// get all info
router.get("/", getAllInfo);

module.exports = router;
