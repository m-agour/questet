const { dirname } = require("path");
const db = require(dirname(require.main.filename) + "/models");
const Exam = db.exam;
const TakeExam = db.user_exam;
const User = db.user;
const Question = db.question;

// create exam
exports.createExam = async(req, res) => {
    // - create title
    // checking email typos.
    if (!req.body.userId)
        return res.status(400).json({ success: false, data: "missing userId." });
    if (!req.body.title)
        return res.status(400).json({ success: false, data: "missing title." });
    let exist = await User.count({ where: { id: req.body.userId } });
    console.log(exist);
    if (!exist)
        return res
            .status(404)
            .json({ success: false, data: "user does not exist." });

    if (req.body.startAt) req.body.startAt = new Date(req.body.startAt);

    let exam = await Exam.create(req.body);
    if (!exam)
        return res
            .status(404)
            .json({ success: false, data: "could not create exam" });

    res.status(200).json({ success: true, data: exam });
};

// exports.createExam = async(req, res) => {
//     // - create title

//     if (!req.body.userId)
//         return res
//             .status(400)
//             .json({ success: false, data: "missing email userId." });
//     let exist = await User.count({ where: { id: req.body.userId } });
//     console.log(exist);

//     let exam = await Exam.create({
//         title: req.body.title,
//         userId: req.body,
//     });

//     // create Time
//     // let str_year = req.body;
//     // let str_Hour = req.body;
//     // let str_mint = req.body;

//     // let str_month = req.body;
//     // let str_day = req.body;
//     // let end_Hour = req.body;
//     // let end_mint = req.body;
//     // let end_year = req.body;
//     // let end_month = req.body;
//     // let end_day = req.body;
//     let time_start = new Date(
//         req.body.str_year,
//         req.body.str_month,
//         req.body.str_day,
//         req.body.str_Hour,
//         req.body.str_mint
//     );
//     let time_end = new Date(
//         req.body.end_year,
//         req.body.end_month,
//         req.body.end_day,
//         req.body.end_Hour,
//         req.body.end_mint
//     );
//     let time_current = new Date();

//     if (time_end.getTime() == time_current.getTime()) {
//         let finish = await Exam.create({ finishExam: 1 });
//         return res.status(200).json("the exam is finish.");
//     }
//     let Difference_In_Time = time_end.getTime() - time_start.getTime();
//     let Difference_In_Hours = Difference_In_Time / (1000 * 3600);
//     console.log(req.body.userId);
//     let stillEcam = await Exam.create({
//         duration: Difference_In_Hours,
//         finishExam: 0,
//     });
//     console.log(stillEcam);
// };
// // points (مجر مثال لحيث الانتهاء من الاكويسشن)
// exports.getEquations = async(req, res) => {
//     // - points
//     let CountPoints = await Question.findAll({
//         attributes: [
//             "id",
//             "points", [sequelize.fn("sum", sequelize.col("points")), "totalPoints"],
//         ],
//         where: { examId: 20 }, // 20 => is just example
//     });
//     return res.json(CountPoints);
// };

// let questions = await Question.findAll({
//   where: { examId: exam.id },
// });
// let TotalPoints = await db.exam.create({ totalPoints: CountPoints });
// return res.status(200).json(Title, TotalPoints);

// - total points

// // -public
// let PublicExam = await db.exam.create({ public: req.body.public });

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

// get Public exams
exports.getPublicExams = async(req, res) => {
    let exams = await Exam.findAll({ where: { public: true } });
    if (!exams)
        return res
            .status(404)
            .json({ success: false, data: "there is no available puplic exams " });
    return res.status(200).json({ success: true, data: exams });
};