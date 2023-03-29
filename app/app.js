const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());

const userRoute = require("../routes/user.route");

app.use("/api/v1", userRoute);

app.get("/", (req, res) => {
  res.send("server running");
});

module.exports = app;