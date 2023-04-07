const {
  createPostService,
  getPostService,
  getPostServiceById,
} = require("../services/post.services");

module.exports.createPost = async (req, res, next) => {
  try {
    const postData = req.body;
    const post = await createPostService(postData);

    res.status(201).json({
      status: true,
      message: "post create success",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "can't create post",
      error: error,
    });
  }
};

module.exports.getPost = async (req, res, next) => {
  try {
    const post = await getPostService();
    res.status(200).json({
      status: true,
      message: "post get success",
      data: post,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "can't get post",
      error: error,
    });
  }
};
module.exports.getPostById = async (req, res, next) => {
  try {
    const post = await getPostServiceById(req.params.id);
    res.status(200).json({
      status: true,
      message: "post get success",
      data: post,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "can't get post",
      error: error,
    });
  }
};
