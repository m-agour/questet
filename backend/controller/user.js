const { dirname } = require("path");
const validator = require("validator");
const bcrypt = require("bcrypt");
const { isString } = require("./utils");

const db = require(dirname(require.main.filename) + "/models");
const User = db.user;

// try{}catch(err){return res.status(500).json({"success": false ,data: err);}
// get all users
exports.getUsers = async(req, res) => {
    try {
        let users = await User.findAll();
        if (!users)
            return res
                .status(404)
                .json({ success: false, data: "could not get data." });
        return res.status(200).json({ success: true, data: users });
    } catch (err) {
        return res
            .status(500)
            .json({ success: false, data: { success: false, data: err } });
    }
};

// get user by id (GET)
exports.getUser = async(req, res) => {
    try {
        let user = await User.findOne({ where: { id: parseInt(req.params.id) } });
        if (!user)
            return res
                .status(404)
                .json({ success: false, data: "user does not exist." });
        return res.status(200).json({ success: true, data: user });
    } catch (err) {
        return res.status(500).json({ success: false, data: err });
    }
};

// create new user (POST)
exports.createUser = async(req, res) => {
    let userData = {};
    userData.email = req.body.email;
    // checking email typos.
    if (!userData.email)
        return res
            .status(400)
            .json({ success: false, data: "missing email address." });
    let exist = await User.count({ where: { email: userData.email } });
    //checking for conflict emails.
    if (exist != 0)
        return res
            .status(409)
            .json({ success: false, data: "email already exist." });
    if (!validator.isEmail(userData.email))
        return res
            .status(400)
            .json({ success: false, data: "wrong email address." });

    //checking name
    userData.firstName = req.body.firstName;
    if (!userData.firstName)
        return res.status(400).json({ success: false, data: "missing first Name" });
    userData.middleName = req.body.middleName;
    userData.lastName = req.body.lastName;

    userData.password = req.body.password;
    if (!userData.password)
        return res
            .status(400)
            .json({ success: false, data: "password does not exist!" });
    userData.password = userData.password.toString();
    // check password
    if (userData.password.length < 8)
        return res
            .status(400)
            .json({ success: false, data: "password too short!" });
    // hashing password
    const salt = await bcrypt.genSalt(10);
    // now we set user password to hashed password
    userData.password = await bcrypt.hash(userData.password, salt);
    // validating birthdate
    let birthdate = req.body.BOD;
    console.log(req.body);
    if (!birthdate || validator.isAfter(birthdate))
        return res.status(400).json({ success: false, data: "wrong birth date." });
    userData.DOB = validator.toDate(birthdate);
    userData.country = req.body.country;
    userData.timeZone = +2;
    userData.gender = req.body.gender;
    userData.currentPosition = req.body.currentPosition;

    let user = await User.create(userData);
    if (!user)
        return res
            .status(500)
            .json({ success: false, data: "could not create user" });
    return res.status(200).json({ success: true, data: user });
};

// get user by id (GET)
exports.getUser = async(req, res) => {
    try {
        let user = await User.findOne({ where: { id: parseInt(req.params.id) } });
        if (!user)
            return res
                .status(404)
                .json({ success: false, data: "user does not exist." });
        return res.status(200).json({ success: true, data: user });
    } catch (err) {
        return res.status(500).json({ success: false, data: err });
    }
};

// update user data (PATCH :id)
exports.updateUser = async(req, res) => {
    // check if user exist
    let user = await User.findOne({ where: { id: parseInt(req.params.id) } });
    if (!user)
        return res
            .status(404)
            .json({ success: false, data: "user does not exist." });

    // checking email typos.
    if (req.body.email) {
        let exist = await User.count({ where: { email: req.body.email } });
        //checking for conflict emails.
        if (exist != 0)
            return res
                .status(409)
                .json({ success: false, data: "email already exist." });
        if (!validator.isEmail(req.body.email))
            return res
                .status(400)
                .json({ success: false, data: "wrong email address." });
    }

    if (req.body.password) {
        req.body.password = ureq.body.password.toString();
        // check password
        if (req.body.password.length < 8)
            return res
                .status(400)
                .json({ success: false, data: "password too short!" });
        // hashing password
        const salt = await bcrypt.genSalt(10);
        // now we set user password to hashed password
        req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    // validating birthdate
    if (req.body.BOD) {
        if (validator.isAfter(req.body.BOD))
            return res
                .status(400)
                .json({ success: false, data: "wrong birth date." });
        req.body.DOB = validator.toDate(req.body.DOB);
    }

    // other data
    if (req.body.country && !isString(req.body.country))
        return res
            .status(400)
            .json({ success: false, data: "country can only be a string!" });

    if (req.body.gender) {
        if (!["m", "f"].includes(req.body.gender))
            return res
                .status(400)
                .json({ success: false, data: "gender can only be male or female!" });
    }
    if (req.body.currentPosition && !isString(req.body.currentPosition))
        return res
            .status(400)
            .json({ success: false, data: "job can only be a string!" });

    let result = await User.update(req.body, {
        where: { id: parseInt(req.params.id) },
    });

    if (!result[0])
        return res
            .status(400)
            .json({ success: false, data: "could not update user data" });
    return res.status(200).json({ success: false, data: "user updated!" });
};

// set user online status (SET by id)
exports.setOnline = async(req, res) => {
    try {
        let now = Date.now();
        let status = await User.update({ lastOnline: now }, { where: { id: req.params.id } });
        if (!status[0])
            return res
                .status(404)
                .json({ success: false, data: "user does not exist." });
        return res.status(200).json({ success: true, data: now });
    } catch (err) {
        return res.status(500).json({ success: false, data: err });
    }
};

// get user online status (GET by id)
exports.isOnline = async(req, res) => {
    try {
        let user = await User.findOne({ where: { id: parseInt(req.params.id) } });
        if (!user)
            return res
                .status(404)
                .json({ success: false, data: "user does not exist." });
        return res.status(200).json({
            success: true,
            data: (Date.now() - user.lastOnline) / 1000 < 40,
        });
    } catch (err) {
        return res.status(500).json({ success: false, data: err });
    }
};

// set user activated (SET by id)
exports.activate = async(req, res) => {
    try {
        let status = await User.update({ activated: true }, { where: { id: req.params.id } });
        if (!status[0]) {
            let user = await User.findOne({ where: { id: parseInt(req.params.id) } });
            if (!user)
                return res
                    .status(404)
                    .json({ success: false, data: "user does not exist." });
            return res
                .status(409)
                .json({ success: false, data: "Already activated." });
        }
        return res.status(200).json({ success: false, data: "activated" });
    } catch (err) {
        return res.status(500).json({ success: false, data: err });
    }
};

// get user activated status (GET by id)
exports.isActivated = async(req, res) => {
    try {
        let user = await User.findOne({ where: { id: parseInt(req.params.id) } });
        if (!user)
            return res
                .status(404)
                .json({ success: false, data: "user does not exist." });
        return res.status(200).json({ success: true, data: user.activated });
    } catch (err) {
        return res.status(500).json({ success: false, data: err });
    }
};

// login user by email (POST)
exports.login = async(req, res) => {
    try {
        let user = await User.findOne({ where: { email: req.body.email } });
        if (!user)
            return res
                .status(404)
                .json({ success: false, data: "user does not exist." });
        let passMatches = await bcrypt.compare(req.body.password, user.password);
        if (!passMatches)
            return res.status(401).json({ success: false, data: "worng password!" });
        return res.status(200).json({ success: true, data: user });
    } catch (err) {
        return res.status(500).json({ success: false, data: err });
    }
};