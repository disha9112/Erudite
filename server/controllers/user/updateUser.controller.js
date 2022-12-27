const express = require("express");
const User = require("../../models/user.model");

exports.updateUser = async (req, res, next) => {
  try {
    if (req.params.id === req.user.id) {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      return res.status(200).json({
        status: true,
        message: "User info updated successfully",
        updatedUser: updatedUser,
      });
    } else {
      return res.status(400).json({
        status: false,
        message: "Updation invalid; you can update only your account",
      });
    }
  } catch (error) {
    next(error);
  }
};
