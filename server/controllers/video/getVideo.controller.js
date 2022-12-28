const express = require("express");
const User = require("../../models/user.model");
const Video = require("../../models/video.model");

exports.getVideo = async (req, res, next) => {
  try {
    const fetchedVideo = await Video.findById(req.params.id);
    if (!video) {
      return res.status(400).json({
        status: false,
        message: "Video not found",
      });
    } else {
      return res.status(200).json({
        status: true,
        message: "Video fetched successfully",
        fetchedVideo,
      });
    }
  } catch (error) {
    next(error);
  }
};
