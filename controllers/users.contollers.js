const { v4: uuidv4 } = require("uuid");
let users = require("../models/users.modle");

// get all users
const getAllUsers = (req, res) => {
  res.status(200).json({ users });
};

// create new user
const createUser = (req, res) => {
  const newUser = {
    id: uuidv4(),
    name: req.body.name,
  };

  users.push(newUser);
  res.status(201).json(users);
};

// update user
const updateUser = (req, res) => {
  const id = req.params.id;

  let newName = req.body.name;

  const filteredUser = users.filter((user) => user.id === id);
  filteredUser.map((user) => {
    user.name = newName;
  });
  res.status(200).json(users);
};

// delete user
const deleteUser = (req, res) => {
  const id = req.params.id;

  const filteredUser = users.filter((user) => user.id !== id);

  users = filteredUser;

  res.status(200).json(users);
};

module.exports = { getAllUsers, createUser, updateUser, deleteUser };
