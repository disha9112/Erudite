const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../../models/user.model");

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        status: false,
        message: "All fields are required",
      });
    }

    const userExists = await User.findOne({ email: email });
    if (!userExists) {
      return res.status(400).json({
        status: false,
        message: "User not found, kindly register",
      });
    } else {
      const isPasswordValid = await bcrypt.compare(
        password,
        userExists.password
      );

      if (isPasswordValid) {
        const token = jwt.sign(
          {
            id: userExists._id,
            email: userExists.email,
          },
          process.env.JWT_SECRET
        );
        return res.status(200).json({
          status: true,
          message: "Validation successful",
          user: userExists,
          token: token,
        });
      } else {
        return res.status(400).json({
          status: false,
          message: "Kindly verify the password entered",
        });
      }
    }
  } catch (error) {
    next(error);
  }
};
