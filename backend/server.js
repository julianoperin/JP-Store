const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");

connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

// app.get("/", (res, req) => {
//   res.send("Working!");
//   console.log("It's working!");
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
