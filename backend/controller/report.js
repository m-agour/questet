const { dirname } = require("path");
const db = require(dirname(require.main.filename) + "/models");

const User = db.user;
const Exam = db.exam;
const Report = db.report;
const Question = db.question;

// try{}catch(err){return res.status(500).json(err);}

//
exports.fileReport = async(req, res) => {
    try {
        let question = await Question.findOne({
            where: { id: req.body.questionId },
        });
        if (!question)
            return res
                .status(404)
                .json({ success: false, data: "question does not exist!" });

        let exam = await Exam.findOne({ where: { id: question.examId } });
        if (!exam)
            return res
                .status(404)
                .json({ success: false, data: "exam does not exist!" });

        let examiner = await User.findOne({ where: { id: exam.userId } });
        if (!examiner)
            return res
                .status(404)
                .json({ success: false, data: "examiner does not exist!" });

        let report = await Report.findAll({ where: { userId: examiner.id } });
        if (!report)
            return res
                .status(404)
                .json({
                    success: false,
                    data: "there is no reports regarding this user",
                });
        return res.status(200).json({ success: true, data: exams });
    } catch (err) {
        return res.status(500).json({ success: false, data: err });
    }
};