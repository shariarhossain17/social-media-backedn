const User = require("../model/user.model");

exports.createUserServices = async (userData) => {
  const user = await User.create(userData);
  return user;
};
