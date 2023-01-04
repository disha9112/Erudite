const express = require("express");
const router = express.Router();

const {
  createComment,
} = require("../controllers/comment/createComment.controller");
const {
  deleteComment,
} = require("../controllers/comment/deleteComment.controller");
const {
  getComments,
} = require("../controllers/comment/getComments.controller");

const verifyToken = require("../middlewares/auth.middleware");

router.post("/", verifyToken, createComment);
router.delete("/:id", verifyToken, deleteComment);
router.get("/:videoId", getComments);

module.exports = router;
