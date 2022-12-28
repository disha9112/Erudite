const express = require("express");
const User = require("../../models/user.model");

exports.follow = async (req, res, next) => {
  try {
    // follow the channel
    await User.findByIdAndUpdate(req.user.id, {
      $push: { followedUsers: req.params.id },
    });
    // find the just followed channel and increase its follower count
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { followers: 1 },
    });
    return res.status(200).json({
      status: true,
      message: "Channel subscription successful",
    });
  } catch (error) {
    next(error);
  }
};
