const express = require("express");
const User = require("../../models/user.model");
const Video = require("../../models/video.model");

exports.deleteVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      return res.status(400).json({
        status: false,
        message: "Video not found",
      });
    }

    if (req.user.id === video.userId) {
      await Video.findByIdAndDelete(req.params.id);
      return res.status(200).json({
        status: true,
        message: "Video deleted successfully",
      });
    } else {
      return res.status(400).json({
        status: false,
        message: "Deletion invalid; you can delete only your videos",
      });
    }
  } catch (error) {
    next(error);
  }
};
