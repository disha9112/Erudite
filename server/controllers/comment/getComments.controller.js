const express = require("express");
const Video = require("../../models/video.model");
const Comment = require("../../models/comment.model");

exports.getComments = async (req, res, next) => {
  try {
    const fetchedComments = await Comment.find({ videoId: req.params.videoId });

    return res.status(200).json({
      status: true,
      message: "Comments fetched successfully",
      comments: fetchedComments,
    });
  } catch (error) {
    next(error);
  }
};
