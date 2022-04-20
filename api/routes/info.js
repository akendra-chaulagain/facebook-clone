const express = require("express");
const router = express.Router();

// User model
const Info = require("../models/Info");
// database
require("../DataBase/DB");

// create info
router.post("/create", async (req, res) => {
  const body = req.body;
  try {
    const info = new Info(body);
    const result = await info.save();
    return res.status(200).json(result);
  } catch (error) {
    console.log("unable to create info" + error);
  }
});

// update user
router.put("/:id", async (req, res) => {
  try {
    const updateInfo = await Info.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(201).json(updateInfo);
  } catch (error) {
    return res
      .status(401)
      .json("unable to update info. something went wrong" + error);
  }
});
// delete user
router.delete("/:id", async (req, res) => {
  try {
    const info = await Info.findByIdAndDelete(req.params.id);
    return res.status(201).json({ message: "infodeleted ", info });
  } catch (error) {
    return res
      .status(401)
      .json("unable to delete info. something went wrong" + error);
  }
});

// find by id
router.get("/find/:id", async (req, res) => {
  try {
    const info = await Info.findById(req.params.id);
    return res.status(201).json(info);
  } catch (error) {
    return res
      .status(401)
      .json("unable to get info. something went wrong" + error);
  }
});

module.exports = router;
