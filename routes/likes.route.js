const router = require("express").Router();
const likeController = require("../controller/like.controller")

router.put("/like",likeController.createLike)
router.delete('/unlike',likeController.unLike)
module.exports = router;