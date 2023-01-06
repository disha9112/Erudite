const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const verifyToken = async (req, res, next) => {
  const token = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
  if (!token) {
    return res.status(400).json({
      status: false,
      message: "Invalid token",
    });
  }

  const userExists = await User.findOne({ email: token.email });
  if (!userExists) {
    return res.status(400).json({
      status: false,
      message: "User does not exist in database",
    });
  } else {
    req.user = userExists;
    next();
  }
};

module.exports = verifyToken;
