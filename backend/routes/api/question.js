const express = require("express");
const { dirname } = require("path");
const questionContoller = require(dirname(require.main.filename) +
  "/controller/question.js");
const router = express.Router();

router.post("/", questionContoller.createQuestion);
router.post("/:id", questionContoller.editQuestion);
router.post("/delete/:id", questionContoller.deleteQuestion);


module.exports = router;
