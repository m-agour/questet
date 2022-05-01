const express = require("express");
const { dirname } = require("path");
const examContoller = require(dirname(require.main.filename) +
  "/controller/exam.js");
const router = express.Router();

router.post("/", examContoller.createExam);
router.get("/", examContoller.getPublicExams);
router.get("/:id", examContoller.getPublicExam);
router.patch("/:id", examContoller.editExam);
router.delete("/:id", examContoller.deleteExam);

module.exports = router;
