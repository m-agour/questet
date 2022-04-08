const express = require("express");
const { dirname } = require("path");
const examContoller = require(dirname(require.main.filename) +
    "/controller/exam.js");
const router = express.Router();

router.post("/", examContoller.createExam);
router.get("/", examContoller.getPublicExams);

module.exports = router;