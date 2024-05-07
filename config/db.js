require("dotenv").config();
const mongoose = require("mongoose");

const dburl = process.env.DB_URL;

mongoose
  .connect(dburl)
  .then(() => {
    console.log("MongoDB Atlas is on");
  })
  .catch((err) => {
    console.log(err);
  });
