// const { v4: uuidv4 } = require("uuid");

const mongoose = require("mongoose");

// const users = [
//   {
//     id: uuidv4(),
//     name: "Mahmood Hassan Rameem",
//   },
//   {
//     id: uuidv4(),
//     name: "Fahmida Yeasmin",
//   },
//   {
//     id: uuidv4(),
//     name: "Jahedul Islam Rasel",
//   },
//   {
//     id: uuidv4(),
//     name: "Abdul Baten",
//   },
// ];

// module.exports = users;

const userSchema = mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("user", userSchema);
