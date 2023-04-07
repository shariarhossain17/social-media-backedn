const Post = require("../model/post.model")


exports.createPostService = async (posData) => {
    const post = await Post.create(posData);
    return post

}


exports.getPostService = async () => {
    const post = await Post.find({}).populate("user");
    return post;
};
exports.getPostServiceById = async (id) => {
    const post = await Post.findOne({id}).populate("user");
    return post;
}