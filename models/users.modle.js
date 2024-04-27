const { v4: uuidv4 } = require("uuid");

const users = [
  {
    id: uuidv4(),
    name: "Mahmood Hassan Rameem",
  },
  {
    id: uuidv4(),
    name: "Fahmida Yeasmin",
  },
];

module.exports = users;
