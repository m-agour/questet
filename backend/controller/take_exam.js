const { dirname } = require("path");
const db = require(dirname(require.main.filename) + "/models");
const User = db.user;
const Exam = db.exam;

exports.getPublicExam = async(req, res) => {
    try {
        let exam = await User.findOne({
            where: { id: parseInt(req.params.examId) },
        });
        if (!exam) return res.status(404).json("exam does not exist.");
        res.status(200).json(exam);
    } catch (err) {
        res.status(500).json(err);
    }
};

// get user's exams he joined
exports.getMyExams = async(req, res) => {
    try {
        let exams = await Exam.findAll({
            where: {
                public: {
                    [Op.ne]: null,
                },
            },
        }); //i dont know query yet
        if (!exames)
            return res.status(404).json("there is no available puplic exams ");
        res.status(200).json(exams);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.takeExam = async(req, res) => {
    try {
        if (!req.body.userId) return res.status(403).json("missing userId");
        if (!req.body.examId) return res.status(403).json("missing examId");

        let user = await User.findOne({
            where: { id: parseInt(req.body.userId) },
        });
        if (!user) return res.status(404).json("user not found!");
        let exam = await Exam.count({
            where: { id: parseInt(req.body.examId) },
        });
        console.log(exam);
        if (!exam) return res.status(404).json("exam not found!");

        let take_exam = await db.take_exam.create({
            userId: req.body.userId,
            examId: req.body.examId,
            timeStarted: Date.now(),
        });

        res.status(200).json(take_exam);
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, data: err });
    }
};

exports.finishExam = async(req, res) => {
    try {
        let take_exam = await db.take_exam.update({
            timeFinished: Date.now(),
        }, {
            where: { id: req.body.takeExamId },
        });

        if (!take_exam[0]) return res.status(404).json("take_exam not found!");

        res.status(200).json(take_exam);
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, data: err });
    }
};

exports.getTakenExams = async(req, res) => {
    try {
        let user = await User.findOne({
            where: { id: parseInt(req.params.userId) },
        });
        if (!user) return res.status(404).json("user not found!");
        let take_exams = await db.take_exam.findAll({
            where: { userId: req.params.userId },
        });
        res.status(200).json(take_exams);
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, data: err });
    }
};