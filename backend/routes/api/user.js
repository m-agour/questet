const express = require("express");
const { dirname } = require("path");
const userContoller = require(dirname(require.main.filename) +
    "/controller/user.js");
const db = require(dirname(require.main.filename) + "/models");

const router = express.Router();

/* GET home page. */
router.get("/testing", (req, res) => {});

router.get("/", userContoller.getUsers);
router.get("/:id", userContoller.getUser);
router.post("/", userContoller.createUser);

router.post("/createUser", async(req, res) => {
    let name = req.body.firstName;
    let data = await db.user.create({ firstName: name });
    res.json(data);
});

const User = db.user;
const Answer = db.Answer;
const answer = db.answer;
/* GET users listing. */
router.get("/", async(req, res) => {
    let data = await User.create({ name: "moahmed" });
    res.json(data);
});
module.exports = router;