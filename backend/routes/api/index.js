const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const examRouter = require("./exam");
const reportRouter = require("./report");
const authRouter = require("./auth");
const userExamRouter = require("./user_exam");
const questionRouter = require("./question");
const answerRouter = require("./answer");

/* GET home page. */
router.use("/user", userRouter);
router.use("/exam", examRouter);
router.use("/user_exam", userExamRouter);
router.use("/auth", authRouter);
router.use("/report", reportRouter);
router.use("/question" , questionRouter);
router.use("/answer" , answerRouter);

router.get("/", (req, res) => {
    res.status(200).json("<h1>API working!</h1>");
});

module.exports = router;