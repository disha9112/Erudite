const express = require("express");
const User = require("../../models/user.model");

exports.getUser = async (req, res, next) => {
  try {
    const fetchedUser = await User.findById(req.params.id);
    return res.status(200).json({
      status: true,
      message: "User fetched successfully",
      fetchedUser,
    });
  } catch (error) {
    next(error);
  }
};
