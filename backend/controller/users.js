const db = require("../config/db/database");

const index = async(req, res, next) => {
    try {
        data = await db.all();
        return res.json(data);
    } catch {
        return res.status(500);
    }
};

module.exports = { index };