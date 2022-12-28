const express = require("express");
const Video = require("../../models/video.model");
const Comment = require("../../models/comment.model");

exports.deleteComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.id);
    const video = await Video.findById(comment.videoId);

    if (req.user.id === comment.userId) {
      await Comment.findByIdAndDelete(req.params.id);
      return res.status(200).json({
        status: true,
        message: "Comment deleted successfully",
      });
    } else {
      return res.status(400).json({
        status: false,
        message:
          "Deletion invalid successfully; you can delete only your comments",
      });
    }
  } catch (error) {
    next(error);
  }
};
