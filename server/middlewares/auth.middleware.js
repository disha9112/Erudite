const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(400).json({
      status: false,
      message: "You are not authenticated",
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(400).json({
        status: false,
        message: "Invalid token",
      });
    }
    req.user = user;
    next();
  });
};

module.exports = verifyToken;
