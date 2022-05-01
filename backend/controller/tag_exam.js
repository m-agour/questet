const { dirname } = require("path");

const db = require(dirname(require.main.filename) + "/models");
const Exam = db.exam;
const tagHasExam = db.exam_has_tag;
const Tag = db.tag;

// ============== get categories(show all) categories ===========================
exports.getTags = async (req, res) => {
  try {
    let tag = await tagHasExam.findAll();
    if (!tag)
      return res
        .status(404)
        .json({ success: false, data: "could not get tag." });
    res.status(200).json({ success: true, data: tag });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, data: { success: false, data: err } });
  }
};

//  ============== get category by id (GET) ===========================
exports.getOneTag = async (req, res) => {
  try {
    let tag = await tagHasExam.findOne({
      where: { id: parseInt(req.params.id) },
    });
    if (!tag)
      return res
        .status(404)
        .json({ success: false, data: "tag does not exist." });
    res.status(200).json({ success: true, data: tag });
  } catch (err) {
    res.status(500).json({ success: false, data: err });
  }
};
//=================================================================

// ============== create categories ===========================
exports.createTag = async (req, res) => {
  try {
    let letTag = {};
    letTag.examId = req.body.examId;
    letTag.title = req.body.title;

    let tag = await Tag.create({ title: letTag.title });
    let tagHas = await tagHasExam.create(letTag);
    if (!letTag.title)
      return res
        .status(409)
        .json({ success: false, data: "tag title is required!." });

    res.status(200).json({ success: true, data: tagHas });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, data: err });
  }
};
//=================================================================

// ============== update(edit) tag ===========================
exports.updateTag = async (req, res) => {
  try {
    let tagHas = await tagHasExam.findOne({
      where: { id: parseInt(req.params.id) },
    });
    if (!tagHas)
      return res
        .status(404)
        .json({ success: false, data: "tag does not exist." });

    if (!(req.body.title && req.body.examId))
      return res
        .status(409)
        .json({ success: false, data: "please write the examId and title" });

    let final = await tagHasExam.update(req.body, {
      where: { id: parseInt(req.params.id) },
    });

    res.status(200).json({ success: true, data: "tagHas updated!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, data: err });
  }
};
//=================================================================

// ============== delete categories ===========================
exports.deleteTag = async (req, res) => {
  try {
    // check if post exist
    let tagHas = await tagHasExam.count({
      where: { id: parseInt(req.params.id) },
    });
    if (!tagHas)
      return res
        .status(404)
        .json({ success: false, data: "tag does not exist." });

    let final = await tagHasExam.destroy({
      where: { id: parseInt(req.params.id) },
    });

    if (!final)
      return res
        .status(400)
        .json({ success: false, data: "could not delete tag." });
    res.status(200).json({ success: true, data: "delete tag!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, data: err });
  }
};
//=================================================================
