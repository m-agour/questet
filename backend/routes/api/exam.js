const express = require("express");
const { dirname } = require("path");
const examContoller = require(dirname(require.main.filename) +
  "/controller/exam.js");
const router = express.Router();

router.post("/createExam", examContoller.createExam);

module.exports = router;
