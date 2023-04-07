const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const byCrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "please provide email"],
    },
    fullName: {
      type: String,
      required: [true, "must provided full-name"],
    },
    userName: {
      type: String,
      required: [true, "must provided user name"],
    },
    password: {
      type: String,
      max: [6, "password must be 6 character"],
      required: [true, "must provided password"],
    },
    phone: {
      type: Number,
    },
    profileImg: {
      type: String,
    },
    website: {
      type: String,
    },
    Bio: {
      type: String,
      max: 150,
    },
    Gender: {
      type: String,
      values: ["male", "female"],
      default: "",
    },
    role: {
      type: String,
      enum: ["user", "admin", "super-admin"],
      default: "user",
    },
    post: [
      {
        type: ObjectId,
        ref: "Post",
      },
    ],
    followers: [
      {
        type: ObjectId,
        ref: "Followers",
      },
    ],
    following: [
      {
        type: ObjectId,
        ref: "Following",
      },
    ],
    saved: [
      {
        type: ObjectId,
        ref: "Saved",
      },
    ],
  },
  { timestamps: true }
);

// hash password
userSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const password = this.password;

  const hashPassword = byCrypt.hashSync(password);

  this.password = hashPassword;

  next();
});

userSchema.methods.comparePassword = function (pass, hash) {
  const isPassWordValid = byCrypt.compare(pass, hash);
  return isPassWordValid;
};
const User = mongoose.model("User", userSchema);

module.exports = User;
