const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default:
        "https://user-images.githubusercontent.com/78133928/208225030-68fc56c2-7a30-4789-92f7-8b4906b26498.png",
    },
    followers: {
      type: Number,
      default: 0,
    },
    followedUsers: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", user);
module.exports = User;
