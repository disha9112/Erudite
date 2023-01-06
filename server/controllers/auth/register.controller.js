const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../../models/user.model");

exports.register = async (req, res, next) => {
  try {
    const { name, email, password, profilePic } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        status: false,
        message: "All fields are required",
      });
    }

    const userExists = await User.findOne({ email: email });
    if (userExists) {
      return res.status(400).json({
        status: false,
        message: "Email already exists in the database",
      });
    } else {
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await User.create({
        name: name,
        email: email,
        password: hashedPassword,
        profilePic: profilePic,
      });
      const token = jwt.sign(
        {
          id: newUser._id,
          email: newUser.email,
        },
        process.env.JWT_SECRET
      );
      return res.status(200).json({
        status: true,
        message: "Registration successful",
        user: newUser,
        token: token,
      });
    }
  } catch (error) {
    next(error);
  }
};
