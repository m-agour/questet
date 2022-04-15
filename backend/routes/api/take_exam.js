const express = require("express");
const { dirname } = require("path");
const takeExamContoller = require(dirname(require.main.filename) +
    "/controller/take_exam.js");
const db = require(dirname(require.main.filename) + "/models");

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json("user_exam API is working");
});
router.get("/public/:examId", takeExamContoller.getPublicExam);
router.post("/takeExam", takeExamContoller.takeExam);
router.post("/finishExam", takeExamContoller.finishExam);
router.get("/takenExams/:userId", takeExamContoller.getTakenExams);
// router.patch("/takeExam", takeExamContoller.getPublicExam);

router.get("/myExams/:examId", takeExamContoller.getMyExams);

module.exports = router;