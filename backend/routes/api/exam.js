const express = require("express");
const router = express.Router();
const { dirname } = require("path");
const db = require(dirname(require.main.filename) + "/models");

// create exam

router.post("/createExam", async (req, res) => {
  // 1- create title
  let Title = await db.exam.create({ title: req.body.title });
  // 2- total points
  let CountPoints = await db.question.count({ points: req.body.points });
  let TotalPoints = await db.exam.create({ totalPoints: CountPoints });
  // 3-public
  let PublicExam = await db.exam.create({ public: req.body.public });
  // 4-Timed

  res.json(Title);
  res.json(TotalPoints);
  res.json(PublicExam);
});

// Edit and update exam

// Delete exam

module.exports = router;
