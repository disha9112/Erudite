const express = require("express");
const User = require("../../models/user.model");

exports.deleteUser = async (req, res, next) => {
  try {
    if (req.params.id === req.user.id) {
      await User.findByIdAndDelete(req.params.id);
      return res.status(200).json({
        status: true,
        message: "User deleted successfully",
      });
    } else {
      return res.status(400).json({
        status: false,
        message: "Deletion invalid; you can delete only your account",
      });
    }
  } catch (error) {
    next(error);
  }
};
