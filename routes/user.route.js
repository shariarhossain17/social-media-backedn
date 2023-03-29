const router = require("express").Router();

const userController = require("../controller/user.controller");

router.post("/auth/createUser", userController.createUser);

module.exports = router;
