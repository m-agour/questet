const express = require("express");
const { dirname } = require("path");
const userExamContoller = require(dirname(require.main.filename) +
    "/controller/user_exam.js");
const db = require(dirname(require.main.filename) + "/models");

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json("user_exam API is working");
});
router.get("/public", userExamContoller.getPublicExams);
router.get("/public/:examId", userExamContoller.getPublicExam);
router.post("/takeExam", userExamContoller.takeExam);
router.post("/finishExam", userExamContoller.finishExam);
router.get("/takenExams/:userId", userExamContoller.getTakenExams);
// router.patch("/takeExam", userExamContoller.getPublicExam);

router.get("/myExams/:examId", userExamContoller.getMyExams);

module.exports = router;