const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const likeSchema = mongoose.Schema({
  post: [
    {
      type: ObjectId,
      ref: "Post",
    },
  ],
  likes: [
    {
      type: ObjectId,
      ref: "User",
      unique: true,
    },
  ],
});

const Likes = mongoose.model("Likes", likeSchema);

module.exports = Likes;
