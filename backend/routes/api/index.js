const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const examRouter = require("./exam");
const authRouter = require("./auth");

/* GET home page. */
router.use("/user", userRouter);
router.use("/exam", examRouter);
router.use("/auth", authRouter);

router.get("/", (req, res) => {
    res.status(200).json("<h1>API working!</h1>");
});

module.exports = router;