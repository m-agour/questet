const { dirname } = require("path");
const db = require(dirname(require.main.filename) + "/models");

const User = db.user;
const Exam = db.exam;
const Report = db.report;
const Question = db.question;

// try{}catch(err){return res.status(500).json(err);}

//

exports.getReport = async(req, res) => {
    try {
        if (!req.params.reportId)
            return res
                .status(400)
                .json({ success: false, data: "no reportId included!" });

        let report = await Report.findOne({
            where: { id: req.params.reportId },
        });
        if (!report)
            return res
                .status(404)
                .json({ success: false, data: "report does not exist!" });

    return res.status(200).json({ success: true, data: report });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, data: err });
    }
};
exports.fileReport = async(req, res) => {
    try {
        if (!req.body.questionId)
            return res.status(400).json({
                success: false,
                data: "questionId was not included",
            });
        if (!req.body.userId)
            return res.status(400).json({
                success: false,
                data: "userId was not included",
            });
        if (!req.body.content)
            return res
                .status(404)
                .json({ success: false, data: "no message included!" });
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
        let user = await User.findOne({ where: { id: req.body.userId } });
        if (!user)
            return res
                .status(404)
                .json({ success: false, data: "user does not exist!" });

        let report = await Report.create({
            userId: user.id,
            questionId: question.id,
            examinerId: examiner.id,
            content: req.body.content,
        });
        if (!report)
            return res.status(404).json({
                success: false,
                data: "couldn't create report for some reason",
            });
        res.status(200).json({ success: true, data: report });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, data: err });
    }
};

exports.getRecievedReports = async(req, res) => {
    try {
        if (!req.params.userId)
            return res
                .status(400)
                .json({ success: false, data: "no userId included!" });

        let reports = await Report.findAll({
            where: { examinerId: req.params.userId },
        });
        if (!reports)
            return res
                .status(404)
                .json({ success: false, data: "reports does not exist!" });

        res.status(200).json({ success: true, data: reports });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, data: err });
    }
};

exports.getFiledReports = async(req, res) => {
    try {
        if (!req.params.userId)
            return res
                .status(400)
                .json({ success: false, data: "no userId included!" });

        let reports = await Report.findAll({
            where: { userId: req.params.userId },
        });
        if (!reports)
            return res
                .status(404)
                .json({ success: false, data: "reports does not exist!" });

        res.status(200).json({ success: true, data: reports });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, data: err });
    }
};

exports.setReportSeen = async(req, res) => {
    try {
        if (!req.params.reportId)
            return res
                .status(400)
                .json({ success: false, data: "no reportId included!" });

        let report = await Report.findOne({
            where: { id: req.params.reportId },
        });
        if (!report)
            return res
                .status(404)
                .json({ success: false, data: "report does not exist!" });

        res.status(200).json({ success: true, data: report });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, data: err });
    }
};