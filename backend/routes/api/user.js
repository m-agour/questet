const express = require("express");
const { dirname } = require("path");
const db = require(dirname(require.main.filename) + "/models");
const router = express.Router();

/* GET home page. */
router.get("/testing", (req, res) => {});

const User = db.user;
const Answer = db.Answer;
const answer = db.answer;
/* GET users listing. */
router.get("/", async(req, res) => {
    let data = await User.create({ name: "moahmed" });
    res.json(data);
});
module.exports = router;