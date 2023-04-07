const jwt = require("jsonwebtoken");

module.exports.generateToken = (user) => {
  const userInfo = {
    email: user.email,
    role: user.role,
    username: user.userName,
    userId:user._id
  };
  const token = jwt.sign(userInfo, process.env.J_W_T, {
    expiresIn: "7d",
  });

  return token;
};
