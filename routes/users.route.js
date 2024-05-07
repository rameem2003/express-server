const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getOneUsers,
} = require("../controllers/users.contollers");

const router = require("express").Router();

router.get("/", getAllUsers); // user get route
router.get("/:id", getOneUsers); // user get one route
router.post("/", createUser); // user post route
router.put("/:id", updateUser); // user update route
router.delete("/:id", deleteUser); // user delete route

module.exports = router;
