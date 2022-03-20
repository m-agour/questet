exports.isString = (data) => {
    if (typeof data === "string" || data instanceof String) return true;
    return false;
};

exports.isInt = (data) => {
    if (data && (typeof data === "int" || data instanceof Int)) return true;
    return false;
};