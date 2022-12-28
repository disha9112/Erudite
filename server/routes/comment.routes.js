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
// const { updateComment } = require("../controllers/comment/updateComment.controller");

const verifyToken = require("../middlewares/auth.middleware");

router.post("/", verifyToken, createComment);
router.delete("/:id", verifyToken, deleteComment);
router.get("/:videoId", getComments);
// router.put("/:id", verifyToken, updateComment);

module.exports = router;
