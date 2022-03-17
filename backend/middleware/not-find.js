const createError = require("http-errors");

const notFind = (req, res, next) => {
  next(createError(404));
};

module.exports = notFind;
