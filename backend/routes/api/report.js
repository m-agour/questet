const express = require("express");
const { dirname } = require("path");
const reportController = require(dirname(require.main.filename) +
    "/controller/report.js");

const router = express.Router();

/* GET home page. */
router.post("/", reportController.fileReport);
router.get("/:reportId", reportController.getReport);
router.get("/recieved/:userId", reportController.getRecievedReports);
router.get("/filed/:userId", reportController.getFiledReports);
router.post("/seen/:reportId", reportController.setReportSeen);

module.exports = router;