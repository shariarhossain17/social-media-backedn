const User = require("../model/user.model");

exports.createUserServices = async (userData) => {
  const user = await User.create(userData);
  return user;
};


exports.logInUserService = async (email) => {
  const user = await User.findOne({email}).populate("post")
  return user
} 
