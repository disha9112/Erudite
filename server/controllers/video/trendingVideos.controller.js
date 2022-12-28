const express = require("express");
const User = require("../../models/user.model");
const Video = require("../../models/video.model");

exports.trendingVideos = async (req, res, next) => {
  try {
    const videos = await Video.find().sort({ views: -1 });
    return res.status(200).json({
      status: true,
      message: "Trending videos fetched successfully",
      videos,
    });
  } catch (error) {
    next(error);
  }
};
