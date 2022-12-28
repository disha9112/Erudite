const express = require("express");
const User = require("../../models/user.model");
const Video = require("../../models/video.model");

exports.like = async (req, res, next) => {
  try {
    const id = req.user.id;
    const videoId = req.params.videoId;

    await Video.findByIdAndUpdate(videoId, {
      $addToSet: { likes: id },
      $pull: { dislikes: id },
    });
    return res.status(200).json({
      status: true,
      message: "Video liked successfully",
    });
  } catch (error) {
    next(error);
  }
};
