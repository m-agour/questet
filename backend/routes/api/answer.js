const express = require("express");
const { dirname } = require("path");
const answerContoller = require(dirname(require.main.filename) + "/controller/answer.js");
const router = express.Router();

router.post("/", answerContoller.createAnswer);


module.exports = router;