const express = require("express");
const usersRouter = require("./users");

const router = express.Router();

const db = require("../models");

const User = db.user;

/* GET users listing. */
router.get("/", async(req, res) => {
    let data = await User.create({ name: "moahmed" });
    res.json(data);
});

// TODO: verify token

// router.use("/users", usersRouter);

module.exports = router;