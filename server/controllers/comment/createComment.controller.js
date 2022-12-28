const express = require("express");
const User = require("../../models/user.model");
const Comment = require("../../models/comment.model");

exports.createComment = async (req, res, next) => {
  try {
    const { content, videoId } = req.body;
    if (!content || !videoId) {
      return res.status(400).json({
        status: false,
        message: "All fields are required",
      });
    }

    const newComment = await Comment.create({
      userId: req.user.id,
      videoId,
      content,
    });
    return res.status(200).json({
      status: true,
      message: "Comment created successfully",
      comment: newComment,
    });
  } catch (error) {
    next(error);
  }
};
