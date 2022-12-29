const express = require("express");
const User = require("../../models/user.model");
const Video = require("../../models/video.model");

exports.followersVideos = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    const follwedChannels = user.followedUsers;

    // we are finding all channels, not just one, thus we are using Promise
    const list = await Promise.all(
      follwedChannels.map((channelId) => {
        return Video.find({ userId: channelId });
      })
    );
    return res.status(200).json({
      status: true,
      message: "Videos of followed channels fetched successfully",
      videos: list.flat().sort((a, b) => b.createdAt - a.createdAt),
    });
  } catch (error) {
    next(error);
  }
};
