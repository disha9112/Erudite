const express = require("express");
const router = express.Router();

const { createVideo } = require("../controllers/video/createVideo.controller");
const { getVideo } = require("../controllers/video/getVideo.controller");
const { updateVideo } = require("../controllers/video/updateVideo.controller");
const { deleteVideo } = require("../controllers/video/deleteVideo.controller");
const { updateViews } = require("../controllers/video/updateViews.controller");
const {
  randomVideos,
} = require("../controllers/video/randomVideos.controller");
const {
  trendingVideos,
} = require("../controllers/video/trendingVideos.controller");
const {
  followersVideos,
} = require("../controllers/video/followersVideos.controller");
const { tagVideos } = require("../controllers/video/tagVideos.controller");
const {
  searchVideos,
} = require("../controllers/video/searchVideos.controller");
// const {
//   like,
// } = require("../controllers/video/like.controller");

const verifyToken = require("../middlewares/auth.middleware");

router.post("/", verifyToken, createVideo);
router.put("/:id", verifyToken, updateVideo);
router.delete("/:id", verifyToken, deleteVideo);
router.get("/find/:id", getVideo);
router.put("/view/:id", updateViews);
router.get("/random", randomVideos);
router.get("/trending", trendingVideos);
router.get("/followersVideos", verifyToken, followersVideos);
router.get("/tag", tagVideos);
router.get("/search", searchVideos);
// router.put("/like/:videoId", verifyToken, like)

module.exports = router;
