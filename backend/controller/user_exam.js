const { dirname } = require("path");
var validator = require("validator");
var bcrypt = require("bcrypt");
const db = require(dirname(require.main.filename) + "/models");
const User = db.user;
const Exam = db.exam;

// try{}catch(err){return res.status(500).json(err);}

/* first public exams from root */ // NOT TESTED YET

// get Public exams
exports.getPublicExams = async(req, res) => {
    try {
        let exams = await Exam.findAll({ where: { public: true } });
        if (!exames)
            return res
                .status(404)
                .json({ success: false, data: "there is no available puplic exams " });
        return res.status(200).json({ success: true, data: exams });
    } catch (err) {
        return res.status(500).json({ success: false, data: err });
    }
};

// get public exam by id (GET)
exports.getPublicExam = async(req, res) => {
    try {
        let exam = await User.findOne({
            where: { id: parseInt(req.params.examId) },
        });
        if (!exam) return res.status(404).json("exam does not exist.");
        return res.status(200).json(exam);
    } catch (err) {
        return res.status(500).json(err);
    }
};

// get user's exams  //exams he joined
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
        return res.status(200).json(exams);
    } catch (err) {
        return res.status(500).json(err);
    }
};

exports.takeExam = async(req, res) => {
    let user = await User.findOne({
        where: { id: parseInt(req.body.userId) },
    });
    if (!user) return res.status(404).json("user not found!");
    let exam = await User.findOne({
        where: { id: parseInt(req.body.examId) },
    });
    if (!exam) return res.status(404).json("exam not found!");

    let user_exam = await db.user_exam.create({
        userId: req.body.userId,
        examId: req.body.examId,
        timeStarted: Date.now(),
    });

    return res.status(200).json(user_exam);
};

exports.finishExam = async(req, res) => {
    let user_exam = await db.user_exam.update({
        timeFinished: Date.now(),
    }, {
        where: { id: req.body.userExamId },
    });

    if (!user_exam[0]) return res.status(404).json("user_exam not found!");

    return res.status(200).json(user_exam);
};

exports.getTakenExams = async(req, res) => {
    let user = await User.findOne({
        where: { id: parseInt(req.params.userId) },
    });
    if (!user) return res.status(404).json("user not found!");
    let user_exams = await db.user_exam.findAll({
        where: { userId: req.params.userId },
    });
    return res.status(200).json(user_exams);
};