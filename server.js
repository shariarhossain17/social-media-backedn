const app = require("./app/app");
const colors = require("colors");
require("dotenv").config();
const port = process.env.PORT || 8800;

const db = require("./db/connectDb");

db()

app.listen(port, () => {
  console.log(`medium share server running on ${port}`);
});
