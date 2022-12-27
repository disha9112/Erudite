require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectToDB = require("./configs/db.config");
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const commentRoutes = require("./routes/comment.routes");
const videoRoutes = require("./routes/video.routes");
const errorHandler = require("./middlewares/error.middleware");

const app = express();

const port = process.env.PORT || 8000;
connectToDB();

app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/videos", videoRoutes);

app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Erudite API is listening for requests");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
