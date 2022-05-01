const { dirname } = require("path");
const Sequelize = require("sequelize");
const db = require(dirname(require.main.filename) + "/models");
const Exam = db.exam;
const user_exam = db.user_exam;
const User = db.user;
const Question = db.question;

// ============== create exam ==================
exports.createExam = async (req, res) => {
  // check user
  if (!req.body.userId)
    return res.status(400).json({ success: false, data: "missing userId." });

  // check title
  if (!req.body.title)
    return res.status(400).json({ success: false, data: "missing title." });
  let exist = await User.count({ where: { id: req.body.userId } });
  if (!exist) {
    return res
      .status(404)
      .json({ success: false, data: "user does not exist." });
  }

  // timing and duration
  const letTimeStart = req.body.startAt; // e.g:'2022-05-01 05:00:00'
  const letTimeEndt = req.body.letTimeEndt; // e.g:'2022-05-01 05:00:00'

  let timeStart = new Date(letTimeStart);
  let timeEnd = new Date(letTimeEndt);

  let Difference_In_Time = timeEnd.getTime() - timeStart.getTime();
  let Difference_In_Hours = Difference_In_Time / (1000 * 3600);

  let exam = await Exam.create({
    title: req.body.title,
    userId: req.body.userId,
    public: req.body.public,
    startAt: letTimeStart,
    duration: Difference_In_Hours,
  });
  if (!exam)
    return res
      .status(404)
      .json({ success: false, data: "could not create exam" });

  res.status(200).json({ success: true, data: exam });
};

// ==================== public ======================================
//  get Public exam by id
exports.getPublicExam = async (req, res) => {
  try {
    let exam = await Exam.findOne({
      where: { id: parseInt(req.params.id) },
    });
    if (!exam) return res.status(404).json("exam does not exist.");
    // check if not public
    if (!exam.public) return res.status(400).json("exam is not public.");
    return res.status(200).json(exam);
  } catch (err) {
    return res.status(500).json(err);
  }
};
// get Public exams
exports.getPublicExams = async (req, res) => {
  let exams = await Exam.findAll({ where: { public: true } });
  if (!exams)
    return res
      .status(404)
      .json({ success: false, data: "there is no available puplic exams " });
  return res.status(200).json({ success: true, data: exams });
};
// =============================================================================

// ======================= update exam(edit) ===================================
exports.editExam = async (req, res) => {
  try {
    let exam = await Exam.findOne({ where: { id: parseInt(req.params.id) } });
    if (!exam) {
      return res
        .status(404)
        .json({ success: false, data: "exam does not exist." });
    }
    if (req.body.userId) {
      let userid = await Exam.count({
        where: {
          userId: req.body.userId,
        },
      });
      if (!userid)
        return res
          .status(404)
          .json({ success: false, data: "user does not exist." });
    }

    let totalPoint = await Question.findOne({
      attributes: [
        "examId",
        [Sequelize.fn("sum", Sequelize.col("points")), "total"],
      ],
      where: { examId: parseInt(req.params.id) },
      group: ["examId"],
      raw: true,
    });
    const final = totalPoint.total;
    let setTotal = await Exam.update(
      { totalPoints: final },
      {
        where: { id: parseInt(req.params.id) },
      }
    );
    let result = await Exam.update(req.body, {
      where: { id: parseInt(req.params.id) },
    });
    if (!result[0])
      return res
        .status(400)
        .json({ success: false, data: "could not update exam data" });
    res.status(200).json({ success: true, data: `exam updated!` });
  } catch (err) {
    res.status(500).json({ success: false, data: err });
  }
};
// =============================================================================
// ======================= delete exam =========================================
exports.deleteExam = async (req, res) => {
  try {
    // check if exam exist
    let exam = await Exam.count({ where: { id: parseInt(req.params.id) } });
    if (!exam)
      return res
        .status(404)
        .json({ success: false, data: "exam does not exist." });

    let result = await Exam.destroy({ where: { id: parseInt(req.params.id) } });

    if (!result)
      return res
        .status(400)
        .json({ success: false, data: "could not delete exam" });
    res.status(200).json({ success: true, data: "delete updated!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, data: err });
  }
};
// =============================================================================
