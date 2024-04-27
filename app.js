const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const usersRouter = require("./routes/users.route");

const app = express(); // create the app
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/users", usersRouter);

// home get route
app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/views/index.html");
});

// error route
app.use((req, res, next) => {
  res.status(404).json({ massage: "Route not found" });
});

// server error
app.use((err, req, res, next) => {
  res.status(500).json({ massage: "Something Wrong" });
});

module.exports = app;
