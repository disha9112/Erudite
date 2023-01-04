const express = require("express");
const router = express.Router();

const { updateUser } = require("../controllers/user/updateUser.controller");
const { deleteUser } = require("../controllers/user/deleteUser.controller");
const { getUser } = require("../controllers/user/getUser.controller");
const { follow } = require("../controllers/user/follow.controller");
const { unfollow } = require("../controllers/user/unfollow.controller");
const { like } = require("../controllers/user/like.controller");

const verifyToken = require("../middlewares/auth.middleware");

router.put("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, deleteUser);
router.get("/find/:id", getUser);
router.put("/follow/:id", verifyToken, follow);
router.put("/unfollow/:id", verifyToken, unfollow);
router.put("/like/:videoId", verifyToken, like);

module.exports = router;
