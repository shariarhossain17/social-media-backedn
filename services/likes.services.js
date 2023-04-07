const { ObjectId } = require("mongodb");
const Likes = require("../model/likes.model");
const Post = require("../model/post.model");

exports.createLikeService = async (userId) => {
  const like = await Likes.create(userId);
  const LikesId = await Post.updateOne(
    { _id: like.post },
    { $push: { likes: like._id } }
  );
  return like;
};
exports.unLikeService = async (likeId, postId) => {
  const unlikeId = await Post.updateOne(
    { _id: postId },
    { $pull: { likes: likeId } }
  );

  const unlike = await Likes.deleteOne({ _id: likeId });

  return unlike;
};
