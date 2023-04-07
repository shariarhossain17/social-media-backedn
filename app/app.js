const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());

const userRoute = require("../routes/user.route");
const postRoute = require("../routes/post.route");
const likeRoute = require("../routes/likes.route");

app.use("/api/v1", userRoute);
app.use("/api/v1", postRoute);
app.use("/api/v1", likeRoute);

app.get("/", (req, res) => {
  res.send("server running");
});

module.exports = app;