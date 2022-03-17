const express = require("express");
const IndexController = require("../controller/index");

const router = express.Router();

/* GET home page. */
router.get("/", IndexController.index);

module.exports = router;
