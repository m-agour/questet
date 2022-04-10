const { dirname } = require("path");
const utils = require("./utils");


const db = require(dirname(require.main.filename) + "/models");
const Question = db.question ;
const User = db.user ;

// create new question (POST)
exports.createQuestion = async(req, res) => {
    
    if (!req.body.examId)
    return res
        .status(400)
        .json({ success: false, data: "missing examId." });

    if (!req.body.questionData)
    return res
        .status(400)
        .json({ success: false, data: "missing questionData." });


    if (!req.body.questionType)
    return res
        .status(400)
        .json({ success: false, data: "missing questionType." });

    if (req.body.points && !(isFloat(req.body.points) || isInt(req.body.points)) )
    return res
        .status(400)
        .json({ success: false, data: "missing questionType." });

    
    // let examId = req.body.examId
    // let questionData = req.body.questionData ;
    // let questionType = req.body.questionType ;
    // console.log(questionData);
}
