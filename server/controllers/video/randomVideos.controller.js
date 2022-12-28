const express = require("express");
const User = require("../../models/user.model");
const Video = require("../../models/video.model");

exports.randomVideos = async (req, res, next) => {
  try {
    const videos = await Video.aggregate([{ $sample: { size: 30 } }]);
    return res.status(200).json({
      status: true,
      message: "Random videos fetched successfully",
      videos,
    });
  } catch (error) {
    next(error);
  }
};
