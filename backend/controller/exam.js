const { dirname } = require("path");
const db = require(dirname(require.main.filename) + "/models");
const Exam = db.exam;
const TakeExam = db.user_exam;
const User = db.user;
const Question = db.question;

// create exam
exports.createExam = async (req, res) => {
  // - create title
  // checking email typos.
  if (!req.body.userId)
    return res
      .status(400)
      .json({ success: false, data: "missing email userId." });
  let exist = await User.count({ where: { id: req.body.userId } });
  console.log(exist);

  let exam = await Exam.create({
    title: req.body.title,
    userId: req.params.id,
  });
  let CountPoints = await Question.count({
    points: req.body.points,
    where: { [Question.examId]: [userId] },
  });
  let TotalPoints = await db.exam.create({ totalPoints: CountPoints });
  return res.status(200).json(Title, TotalPoints);
};

// - total points

// // -public
// let PublicExam = await db.exam.create({ public: req.body.public });

// get public exam by id (GET)
exports.getPublicExam = async (req, res) => {
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
