const { dirname } = require("path");

const db = require(dirname(require.main.filename) + "/models");
const Answer = db.answer;
const Question = db.question;

// create new answer (POST)
exports.createAnswer = async(req, res) => {
    try {
        if (!req.body.questionId)
            return res
                .status(400)
                .json({ success: false, data: "missing questionId." });

        let question = await Question.count({
            where: {
                id: req.body.questionId,
            },
        });

        console.log(question);
        if (!question)
            return res
                .status(404)
                .json({ success: false, data: "question does not exist." });

        if (!req.body.answerData)
            return res
                .status(400)
                .json({ success: false, data: "missing answerData." });

        if (!req.body.correct)
            return res
                .status(400)
                .json({
                    success: false,
                    data: "missing answerType (correct or wrong).",
                });

        if (!["T", "F"].includes(req.body.correct))
            return res
                .status(400)
                .json({ success: false, data: "questionType must be 'T' or 'F' " });

        let answer = await Answer.create(req.body);

        if (!answer)
            return res
                .status(500)
                .json({ success: false, data: "could not create answer" });

        res.status(200).json({ success: true, data: answer });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, data: err });
    }
};

// edit answer (PATCH)
exports.editAnswer = async(req, res) => {
    try {
        // check if answer exist
        let answer = await Answer.count({ where: { id: parseInt(req.params.id) } });
        if (!answer)
            return res
                .status(404)
                .json({ success: false, data: "answer does not exist." });

        if (req.body.correct)
            if (!["T", "F"].includes(req.body.correct))
                return res
                    .status(400)
                    .json({ success: false, data: "correct must be 'T' or 'F'" });

        let result = await Answer.update(req.body, {
            where: { id: parseInt(req.params.id) },
        });

        if (!result[0])
            return res
                .status(400)
                .json({ success: false, data: "could not update answer data" });
        res.status(200).json({ success: true, data: "answer updated!" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, data: err });
    }
};

// delete answer (POST)
exports.deleteAnswer = async(req, res) => {
    try {
        // check if answer exist
        let answer = await Answer.count({ where: { id: parseInt(req.params.id) } });
        if (!answer)
            return res
                .status(404)
                .json({ success: false, data: "answer does not exist." });

        let result = await Answer.destroy({
            where: { id: parseInt(req.params.id) },
        });

        if (!result)
            return res
                .status(400)
                .json({ success: false, data: "could not delete answer" });
        res.status(200).json({ success: true, data: "answer deleted!" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, data: err });
    }
};

// get answer by id (GET)
exports.getAnswer = async(req, res) => {
    try {
        let answer = await Answer.findOne({
            where: { id: parseInt(req.params.id) },
        });
        if (!answer)
            return res
                .status(404)
                .json({ success: false, data: "answer does not exist." });
        res.status(200).json({ success: true, data: answer });
    } catch (err) {
        res.status(500).json({ success: false, data: err });
    }
};

// get correct answer by id (GET)
exports.getCorrectAnswer = async(req, res) => {
    try {
        let answer = await Answer.findAll({
            where: { questionId: parseInt(req.params.questionId), correct: "T" },
        });
        if (!answer)
            return res
                .status(404)
                .json({ success: false, data: "answer does not exist." });
        res.status(200).json({ success: true, data: answer });
    } catch (err) {
        res.status(500).json({ success: false, data: err });
    }
};

// get all answers for one question by questionId (GET)
exports.getAllAnswers = async(req, res) => {
    try {
        let answer = await Answer.findAll({
            where: { questionId: parseInt(req.params.questionId) },
        });
        if (!answer)
            return res
                .status(404)
                .json({ success: false, data: "answer does not exist." });
        res.status(200).json({ success: true, data: answer });
    } catch (err) {
        res.status(500).json({ success: false, data: err });
    }
};