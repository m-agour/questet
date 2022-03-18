const express = require("express");
const usersRouter = require("./users");

const router = express.Router();

const db = require("../models");

db.sequelize.sync();

/* GET users listing. */
router.get("/", (req, res) => {
    res.send("APIs working");
});

// TODO: verify token

// router.use("/users", usersRouter);

module.exports = router;