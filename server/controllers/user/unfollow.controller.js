const express = require("express");
const User = require("../../models/user.model");

exports.unfollow = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $pull: { followedUsers: req.params.id },
    });
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { followers: -1 },
    });
    return res.status(200).json({
      status: true,
      message: "Channel subscription removed",
    });
  } catch (error) {
    next(error);
  }
};
