exports.isString = (data) => {
    if (typeof data === "string" || data instanceof String) return true;
    return false;
};

exports.isInt = (n) => {
    return Number(n) === n && n % 1 === 0;
};

exports.isFloat = (n) => {
    return Number(n) === n && n % 1 !== 0;
};