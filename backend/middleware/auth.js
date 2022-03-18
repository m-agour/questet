const login = (req, res, next) => {
    let email = req.body.email;
    let password = req.body.password;
    if (password !== "1234") res.status(403).json("Worng password");

    // get user by email
    // compare hash password with user.password
    // if false res.status(403).json('Worng password')
};

module.exports = { login };