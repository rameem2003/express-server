const { v4: uuidv4 } = require("uuid");
const User = require("../models/users.modle");

// get all users
const getAllUsers = async (req, res) => {
  try {
    let users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error);
  }
};

// get one user
const getOneUsers = async (req, res) => {
  try {
    let user = await User.findOne({ id: req.params.id });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

// create new user
const createUser = async (req, res) => {
  try {
    const newUser = new User({
      id: uuidv4(),
      name: req.body.name,
    });

    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
};

// update user
const updateUser = async (req, res) => {
  try {
    let user = await User.findOne({ id: req.params.id });
    user.name = req.body.name;
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

// delete user
const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ id: req.params.id });
    res.status(200).json({
      msg: "User Deleted",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAllUsers,
  getOneUsers,
  createUser,
  updateUser,
  deleteUser,
};
