const express = require("express");
const User = require("../../models/user.model");
const Video = require("../../models/video.model");

exports.searchVideos = async (req, res, next) => {
  try {
    const search = req.query.search;
    const searchedVideos = await Video.find({
      title: { $regex: search, $options: "i" },
    }).limit(30);

    return res.status(200).json({
      status: true,
      message: "Videos by title searched successfully",
      searchedVideos,
    });
  } catch (error) {
    next(error);
  }
};
