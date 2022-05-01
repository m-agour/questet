const express = require("express");
const { dirname } = require("path");
const tagContoller = require(dirname(require.main.filename) +
  "/controller/tag_exam.js");
const router = express.Router();

router.get("/", tagContoller.getTags);
router.get("/:id", tagContoller.getOneTag);
router.post("/", tagContoller.createTag);
router.patch("/:id", tagContoller.updateTag);
router.delete("/:id", tagContoller.deleteTag);

module.exports = router;
