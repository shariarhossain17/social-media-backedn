const { createLikeService, unLikeService } = require("../services/likes.services");

module.exports.createLike = async (req, res, next) => {
  try {
    const like = await createLikeService(req.body);
    res.status(201).json({
      status: true,
      message: "like success",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "like can't complete",
      error: error,
    });
  }
};
module.exports.unLike = async (req, res, next) => {
  try {
    const {id,postId} = req.body;
    const like = await unLikeService(id,postId);
    res.status(200).json({
      status: true,
      message: "unlike success",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "unlike can't complete",
      error: error,
    });
  }
};
