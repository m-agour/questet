const express = require("express");
const UserController = require("../controller/users");

const router = express.Router();

/* GET users listing. */
router.get("/", UserController.index);

module.exports = router;
