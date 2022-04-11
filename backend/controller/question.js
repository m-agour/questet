const { dirname } = require("path");
const validator = require("validator");
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


// edit question (PATCH)
exports.editQuestion = async(req , res) => {
    // check if question exist
    let question = await Question.count({ where: { id: parseInt(req.params.id) } });
    // select * from question where id = 
    if (!question)
        return res
            .status(404)
            .json({ success: false, data: "question does not exist." });
    
    if (req.body.examId)
        {
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
    }

    if (req.body.questionType)
        if (!["M", "N", "T"].includes(req.body.questionType))
            return res
                .status(400)
                .json({ success: false, data: "questionType must be 'M' or 'N' or 'T'" });
    if (
        req.body.points &&
        !(utils.isFloat(req.body.points) || utils.isInt(req.body.points))
    )
        return res
            .status(400)
            .json({ success: false, data: "points must be string or float." });

    let result = await Question.update(req.body, {
        where: { id: parseInt(req.params.id) },
    });

    if (!result[0])
        return res
            .status(400)
            .json({ success: false, data: "could not update question data" });
    return res.status(200).json({ success: true, data: "question updated!" });

};


// delete question (POST)
exports.deleteQuestion = async(req , res) => {
    // check if question exist
    let question = await Question.count({ where: { id: parseInt(req.params.id) } });
    if (!question)
        return res
            .status(404)
            .json({ success: false, data: "question does not exist." });

    let result = await Question.destroy({ where: { id: parseInt(req.params.id) }
    });

    if (!result)
        return res
            .status(400)
            .json({ success: false, data: "could not delete question data" });
    return res.status(200).json({ success: true, data: "delete updated!" });

};

// get question by id (GET)
exports.getQuestion = async(req, res) => {
    try {
        let question = await Question.findOne({ where: { id: parseInt(req.params.id) } });
        if (!question)
            return res
                .status(404)
                .json({ success: false, data: "question does not exist." });
        return res.status(200).json({ success: true, data: question });
    } catch (err) {
        return res.status(500).json({ success: false, data: err });
    }
};

// TODO: edit question   done
// delete question     done
// get question     done
//