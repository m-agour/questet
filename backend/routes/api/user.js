const express = require("express");
const { dirname } = require("path");
const userContoller = require(dirname(require.main.filename) +
    "/controller/user.js");

const router = express.Router();

/* GET home page. */
router.get("/testing", (req, res) => {});

router.get("/", userContoller.getUsers);
router.post("/", userContoller.createUser);
router.get("/:id", userContoller.getUser);
router.patch("/:id", userContoller.updateUser);
router.get("/:id/online", userContoller.isOnline);
router.post("/:id/online", userContoller.setOnline);
router.get("/:id/activated", userContoller.isActivated);
router.post("/:id/activate", userContoller.activate);

module.exports = router;