const express = require("express");
const User = require("../../models/user.model");
const Video = require("../../models/video.model");

exports.tagVideos = async (req, res, next) => {
  try {
    const tag = req.query.tag;
    const tagVideos = await Video.find({ tag: { $in: tag } }).limit(20);

    return res.status(200).json({
      status: true,
      message: "Videos by tag fetched successfully",
      tagVideos,
    });
  } catch (error) {
    next(error);
  }
};
