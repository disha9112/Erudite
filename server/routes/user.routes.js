const express = require("express");
const router = express.Router();

const { updateUser } = require("../controllers/user/updateUser.controller");

const verifyToken = require("../middlewares/auth.middleware");

router.put("/:id", verifyToken, updateUser);
// router.delete("/:id", verifyToken, deleteUser);
// router.get("/find/:id", getUser);
// router.put("/follow/:id", verifyToken, follow);
// router.put("/unfollow/:id", verifyToken, unfollow);
// router.put("/like/:videoId", verifyToken, like);
// router.put("/dislike/:videoId", verifyToken, dislike);

module.exports = router;
