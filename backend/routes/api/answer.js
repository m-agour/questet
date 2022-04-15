const express = require("express");
const { dirname } = require("path");
const answerContoller = require(dirname(require.main.filename) + "/controller/answer.js");
const router = express.Router();

router.post("/", answerContoller.createAnswer);
router.patch("/:id", answerContoller.editAnswer);
router.post("/delete/:id", answerContoller.deleteAnswer);
router.get("/:id", answerContoller.getAnswer);
router.get("/correct/:questionId", answerContoller.getCorrectAnswer);
router.get("/answers/:questionId", answerContoller.getAllAnswers);

module.exports = router;