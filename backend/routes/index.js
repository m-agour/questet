const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send("<h1>routes are working!</h1>");
});

module.exports = router;