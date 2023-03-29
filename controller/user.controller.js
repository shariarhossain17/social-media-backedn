const { createUserServices } = require("../services/user.services");


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
