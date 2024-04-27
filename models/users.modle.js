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
  {
    id: uuidv4(),
    name: "Jahedul Islam Rasel",
  },
  {
    id: uuidv4(),
    name: "Abdul Baten",
  },
];

module.exports = users;
