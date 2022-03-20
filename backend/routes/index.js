const express = require("express");
const router = express.Router();
const userRouter = require("../routes/api/user");
const examRouter = require("../routes/api/exam");
const authRouter = require("../routes/api/auth");

/* GET home page. */
router.use("/user", userRouter);
router.use("/exam", examRouter);
router.use("/auth", examRouter);

router.get("/", (req, res) => {
    res.status(200).send("<h1>API working!</h1>");
});

module.exports = router;