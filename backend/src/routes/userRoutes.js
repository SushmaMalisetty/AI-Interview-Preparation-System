const express = require("express");
const router = express.Router();
const { addUser, fetchUsers } = require("../controllers/userController");

router.post("/add", addUser);
router.get("/", fetchUsers);

module.exports = router;
