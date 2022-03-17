const index = (req, res, next) => {
    res.json({ title: "Express" });
};

module.exports = { index };