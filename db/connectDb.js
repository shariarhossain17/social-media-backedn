const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const connectDb = async () => {
  try {
    await mongoose
      .connect("mongodb://127.0.0.1:27017/medium_share", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((data) => {
        console.log("db connected".yellow);
      });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDb;
