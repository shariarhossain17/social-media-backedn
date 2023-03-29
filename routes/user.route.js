const router = require("express").Router();

const userController = require("../controller/user.controller");
const { userCreateValidator } = require("../utils/validator/UserValidator");

router.post("/auth/createUser", userController.createUser);
router.post("/auth/login", userController.logInUser);

module.exports = router;
