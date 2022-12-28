const express = require("express");
const User = require("../../models/user.model");
const Video = require("../../models/video.model");

exports.updateVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      return res.status(400).json({
        status: false,
        message: "Video not found",
      });
    }

    if (req.user.id === video.userId) {
      const updatedVideo = await Video.findById(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      return res.status(200).json({
        status: true,
        message: "Video updated successfully",
        updatedVideo,
      });
    } else {
      return res.status(400).json({
        status: false,
        message: "Updation invalid; you can update only your videos",
      });
    }
  } catch (error) {
    next(error);
  }
};
