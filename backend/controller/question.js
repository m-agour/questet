const { dirname } = require("path");
const utils = require("./utils");

const db = require(dirname(require.main.filename) + "/models");
const Question = db.question;
const Exam = db.exam;
const User = db.user;

// create new question (POST)
exports.createQuestion = async(req, res) => {
    if (!req.body.examId)
        return res.status(400).json({ success: false, data: "missing examId." });

    let exam = await Exam.count({
        where: {
            id: req.body.examId,
        },
    });
    console.log(exam);
    if (!exam)
        return res
            .status(404)
            .json({ success: false, data: "exam does not exist." });

    if (!req.body.questionData)
        return res
            .status(400)
            .json({ success: false, data: "missing questionData." });

    if (!req.body.questionType)
        return res
            .status(400)
            .json({ success: false, data: "missing questionType." });

    if (!["M", "N", "T"].includes(req.body.questionType))
        return res
            .status(400)
            .json({ success: false, data: "questionType must be 'm' or 'n' or 't'" });
    if (
        req.body.points &&
        !(utils.isFloat(req.body.points) || utils.isInt(req.body.points))
    )
        return res
            .status(400)
            .json({ success: false, data: "points must be string or float." });

    let question = await Question.create(req.body);

    if (!question)
        return res
            .status(500)
            .json({ success: false, data: "could not create question" });

    return res.status(200).json({ success: true, data: question });
};

// TODO: edit question
// delete quesion
//