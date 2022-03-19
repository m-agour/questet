const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const examRouter = require("./exam");

/* GET home page. */
router.use("/user", userRouter);
router.use("/exam", examRouter);

router.get("/", (req, res) => {
    res.status(200).json("<h1>API working!</h1>");
});

module.exports = router;