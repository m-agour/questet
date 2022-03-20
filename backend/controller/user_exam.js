const { dirname } = require("path");
var validator = require("validator");
var bcrypt = require("bcrypt");
const { Op } = require("sequelize");
const db = require(dirname(require.main.filename) + "/models");
const User = db.user;
const Exam = db.exam;

// try{}catch(err){return res.status(500).json(err);}

/* first public exams from root */    // NOT TESTED YET

// get Public exams
exports.getPublicExams = async(req, res) => {
    try {
        let exams = await Exam.findAll({where:{public:{[Op.ne]:null}}});
        if (!exames) return res.status(404).json("there is no available puplic exams ");
        return res.status(200).json(exams);
    } catch (err) {
        return res.status(500).json(err);
    }
};

// get public exam by id (GET)
exports.getPublicExam = async(req, res) => {
    try {
        let exam = await User.findOne({ where: { id: parseInt(req.params.examId) } });
        if (!exam) return res.status(404).json("exam does not exist.");
        return res.status(200).json(exam);
    } catch (err) {
        return res.status(500).json(err);
    }
};

// get user's exams  //exams he joined
exports.getMyExams = async(req, res) => {
    try {
        let exams = await Exam.findAll({where:{public:{[Op.ne]:null}}});//i dont know query yet
        if (!exames) return res.status(404).json("there is no available puplic exams ");
        return res.status(200).json(exams);
    } catch (err) {
        return res.status(500).json(err);
    }
};
 
// get user's exams //exams he made