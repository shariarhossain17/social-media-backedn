const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "please provide name"],
    },
    fullName: {
      type: String,
      required: [true, "must provided full-name"],
    },
    userName: {
      type: String,
      required: [true, "must provided user name"],
    //   unique: true,
    },
    password: {
      type: String,
      max: [6, "password must be 6 character"],
      required: [true, "must provided password"],
    },
    phone: {
      type: Number,
    },
    profileImg: {
      type: String,
    },
    website: {
      type: String,
    },
    Bio: {
      type: String,
      max: 150,
    },
    Gender: {
      type: String,
      values: ["male", "female"],
      default: "",
    },
    post: [
      {
        type: ObjectId,
        ref: "Post",
      },
    ],
    followers: [
      {
        type: ObjectId,
        ref: "Followers",
      },
    ],
    following: [
      {
        type: ObjectId,
        ref: "Following",
      },
    ],
    saved: [
      {
        type: ObjectId,
        ref: "Saved",
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
