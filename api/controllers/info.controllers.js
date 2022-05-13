const express = require("express");

// User model
const Info = require("../models/Info");
const createError = require("../utils/error");
// database
require("../DataBase/DB");

// create info
const createInfo = async (req, res, next) => {
  const body = req.body;
  try {
    const info = new Info(body);
    const result = await info.save();
    return res.status(200).json(result);
  } catch (error) {
    next(createError(401, "unable to cretate user's info"));
  }
};

// update info
const updateInfo = async (req, res, next) => {
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
    next(createError(401, "unable to update Info. something went wrong"));
  }
};

// delete infoi
const deleteInfo = async (req, res, next) => {
  try {
    const info = await Info.findByIdAndDelete(req.params.id);
    return res.status(201).json({ message: "info deleted ", info });
  } catch (err) {
    next(err);
  }
};

// find by id
const findByIdInfo = async (req, res, next) => {
  try {
    const info = await Info.findById(req.params.id);
    return res.status(201).json(info);
  } catch (err) {
    next(err);
  }
};

// get all info
const getAllInfo = async (req, res, next) => {
  try {
    const getAll = await Info.find();
    return res.status(201).json(getAll);
  } catch (err) {
    next(err);
  }
};

// get individual info according to user id given in info
const individualInfo = async (req, res, next) => {
  const { userId } = req.body;
  try {
    const getIndividulaInfo = await Info.find({ userId }).sort({
      _id: -1,
    });
    return res.status(201).json(getIndividulaInfo);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createInfo,
  updateInfo,
  deleteInfo,
  getAllInfo,
  individualInfo,
  findByIdInfo
};
