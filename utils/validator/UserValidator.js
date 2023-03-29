const { body } = require("express-validator") 

const validator = require("express-validator");

exports.userCreateValidator = () => {
  return [
    body("email").isEmail().notEmpty().withMessage("email required"),
    body("fullName").not().notEmpty().withMessage("provide full name"),
    body("userName").notEmpty().withMessage("provide user name"),
    body("password").notEmpty().withMessage("password required"),
  ];
};
