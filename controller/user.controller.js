const {
  createUserServices,
  LoginUserService,
  logInUserService,
} = require("../services/user.services");
const { generateToken } = require("../utils/validator/Token");

module.exports.createUser = async (req, res, next) => {
  try {
    const userData = req.body;
    const user = await createUserServices(userData);
    res.status(201).json({
      status: true,
      message: "user create success",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "something wrong",
      err: error,
    });
  }
};
module.exports.logInUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        status: false,
        message: "please provide email and password",
      });
    }
    const user = await logInUserService(email);

    if (!user) {
      return res.status(403).json({
        message: "cant't find account in this email",
      });
    }

    const isPasswordValid = await user.comparePassword(password, user.password);

    if (!isPasswordValid) {
      return res.status(403).json({
        message: "Password incorrect",
      });
    }
    const token = generateToken(user)
    const { password: pwd, ...others } = user.toObject();
    res.status(201).json({
      status: true,
      message: "log in success",
      data:{
        token:token,
        user:others
      },
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "something wrong",
      err: error,
    });
  }
};
