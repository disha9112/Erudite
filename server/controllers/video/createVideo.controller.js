const express = require("express");
const User = require("../../models/user.model");
const Video = require("../../models/video.model");

exports.createVideo = async (req, res, next) => {
  try {
    const { title, info, thumbnail, tag, videoUrl } = req.body;
    if (!title || !info || !thumbnail || !tag || !videoUrl) {
      return res.status(400).json({
        status: false,
        message: "All fields are required",
      });
    }

    const newVideo = await Video.create({
      userId: req.user.id,
      title,
      info,
      thumbnail,
      tag,
      videoUrl,
    });
    return res.status(200).json({
      status: true,
      message: "Video created successfully",
      video: newVideo,
    });
  } catch (error) {
    next(error);
  }
};
