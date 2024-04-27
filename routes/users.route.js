const getAllUsers = require("../controllers/users.contollers");

const router = require("express").Router();

// user get route
router.get("/", getAllUsers);

module.exports = router;
