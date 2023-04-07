const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator = require("validator");

const postSchema = mongoose.Schema(
  {
    user: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    img: [
      {
        type: String,
        validate: [validator.isURL, "provide valid img url"],
      },
    ],
    likes: [
      {
        type: ObjectId,
        ref: "Likes",
      },
    ],
    comments: [
      {
        type: ObjectId,
        ref: "Comments",
      },
    ],
    desc: String,
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
