const router = require("express").Router();
const postController = require("../controller/post.controller");

router.route("/create-post").post(postController.createPost);
router.route("/get-post").get(postController.getPost);
router.route("/get-post/:id").get(postController.getPostById);


module.exports = router;
