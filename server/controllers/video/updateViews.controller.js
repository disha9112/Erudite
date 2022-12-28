const express = require("express");
const User = require("../../models/user.model");
const Video = require("../../models/video.model");

exports.updateViews = async (req, res, next) => {
  try {
    await Video.findByIdAndUpdate(req.params.id, {
      $inc: { views: 1 },
    });
    return res.status(200).json({
      status: true,
      message: "Views for video updated successfully",
    });
  } catch (error) {
    next(error);
  }
};
