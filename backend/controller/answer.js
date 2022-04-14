const { dirname } = require("path");


const db = require(dirname(require.main.filename) + "/models");
const Answer = db.answer;
const Question = db.question;

// create new answer (POST)
exports.createAnswer = async(req, res) => {
    if (!req.body.questionId)
        return res.status(400).json({ success: false, data: "missing questionId." });
    
    let question = await Question.count({
        where: {
            id: req.body.questionId,
        },
    });
    
    console.log(question);
    if (!question)
        return res
            .status(404)
            .json({ success: false, data: "question does not exist." });
    
    if (!req.body.answerData)
        return res
            .status(400)
            .json({ success: false, data: "missing answerData." });
    
    if (!req.body.correct)
    return res
        .status(400)
        .json({ success: false, data: "missing answerType (correct or wrong)." });
    
    if (![ "T" , "F" ].includes(req.body.correct))
    return res
        .status(400)
        .json({ success: false, data: "questionType must be 'T' or 'F' " });
    
    let answer = await Answer.create(req.body);
    
    if (!answer)
        return res
            .status(500)
            .json({ success: false, data: "could not create answer" });
    
    return res.status(200).json({ success: true, data: answer });
};