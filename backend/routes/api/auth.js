const express = require("express");
const { dirname } = require("path");
const userContoller = require(dirname(require.main.filename) +
    "/controller/user.js");

const router = express.Router();

router.post("/login", userContoller.login);

module.exports = router;