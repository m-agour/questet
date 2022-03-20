const { dirname } = require("path");
var validator = require("validator");
var bcrypt = require("bcrypt");

const db = require(dirname(require.main.filename) + "/models");
const User = db.user;

// try{}catch(err){return res.status(500).json(err);}
// get all users
exports.getUsers = async(req, res) => {
    try {
        let users = await User.findAll();
        if (!users) return res.status(404).json("could not get data.");
        return res.status(200).json(users);
    } catch (err) {
        return res.status(500).json(err);
    }
};

// get user by id (GET)
exports.getUser = async(req, res) => {
    try {
        let user = await User.findOne({ where: { id: parseInt(req.params.id) } });
        if (!user) return res.status(404).json("user does not exist.");
        return res.status(200).json(user);
    } catch (err) {
        return res.status(500).json(err);
    }
};

// create new user (POST)
exports.createUser = async(req, res) => {
    let userData = {};
    userData.email = req.body.email;
    // checking email typos.
    if (!userData.email) return res.status(400).json("missing email address.");
    let exist = await User.count({ where: { email: userData.email } });
    //checking for conflict emails.
    if (exist != 0) return res.status(409).json("email already exist.");
    if (!validator.isEmail(userData.email))
        return res.status(400).json("wrong email address.");

    //checking name
    userData.firstName = req.body.firstName;
    if (!userData.firstName) return res.status(400).json("missing first Name");
    userData.middleName = req.body.middleName;
    userData.lastName = req.body.lastName;

    userData.pass = req.body.password;
    if (!userData.pass) return res.status(400).json("password does not exist!");
    userData.pass = userData.pass.toString();
    // check password
    if (userData.pass.length < 8)
        return res.status(400).json("password too short!");
    // validating birthdate
    let birthdate = req.body.BOD;
    console.log(req.body);
    if (!birthdate || validator.isAfter(birthdate))
        return res.status(400).json("wrong birth date.");
    userData.DOB = validator.toDate(birthdate);
    userData.country = req.body.country;
    userData.timeZone = +2;
    userData.gender = req.body.gender;
    userData.currentPosition = req.body.currentPosition;

    let user = await User.create(userData);
    if (!user) return res.status(404).json("could not create user");
    return res.status(200).json(user);
};

// get user by id (GET)
exports.getUser = async(req, res) => {
    try {
        let user = await User.findOne({ where: { id: parseInt(req.params.id) } });
        if (!user) return res.status(404).json("user does not exist.");
        return res.status(200).json(user);
    } catch (err) {
        return res.status(500).json(err);
    }
};

// update user data (PATCH :id)
exports.createUser = async(req, res) => {
    let user = await User.findOne({ where: { id: parseInt(req.params.id) } });
    if (!user) return res.status(404).json("user does not exist.");
    userData.email = req.body.email;
    // checking email typos.
    if (!userData.email) return res.status(400).json("missing email address.");
    let exist = await User.count({ where: { email: userData.email } });
    //checking for conflict emails.
    if (exist != 0) return res.status(409).json("email already exist.");
    if (!validator.isEmail(userData.email))
        return res.status(400).json("wrong email address.");

    //checking name
    userData.firstName = req.body.firstName;
    if (!userData.firstName) return res.status(400).json("missing first Name");
    userData.middleName = req.body.middleName;
    userData.lastName = req.body.lastName;

    userData.pass = req.body.password;
    if (!userData.pass) return res.status(400).json("password does not exist!");
    userData.pass = userData.pass.toString();
    // check password
    if (userData.pass.length < 8)
        return res.status(400).json("password too short!");
    // validating birthdate
    let birthdate = req.body.BOD;
    console.log(req.body);
    if (!birthdate || validator.isAfter(birthdate))
        return res.status(400).json("wrong birth date.");
    userData.DOB = validator.toDate(birthdate);
    userData.country = req.body.country;
    userData.timeZone = +2;
    userData.gender = req.body.gender;
    userData.currentPosition = req.body.currentPosition;

    let result = await User.create(userData);
    if (!result[0]) return res.status(404).json("could not create user");
    return res.status(200).json(user);
};

// set user online status (SET by id)
exports.setOnline = async(req, res) => {
    try {
        let now = Date.now();
        let status = await User.update({ lastOnline: now }, { where: { id: req.params.id } });
        if (!status[0]) return res.status(404).json("user does not exist.");
        return res.status(200).json(now);
    } catch (err) {
        return res.status(500).json(err);
    }
};

// get user online status (GET by id)
exports.isOnline = async(req, res) => {
    try {
        let user = await User.findOne({ where: { id: parseInt(req.params.id) } });
        if (!user) return res.status(404).json("user does not exist.");
        return res.status(200).json((Date.now() - user.lastOnline) / 1000 < 40);
    } catch (err) {
        return res.status(500).json(err);
    }
};

// set user activated (SET by id)
exports.activate = async(req, res) => {
    try {
        let status = await User.update({ activated: true }, { where: { id: req.params.id } });
        if (!status[0]) {
            let user = await User.findOne({ where: { id: parseInt(req.params.id) } });
            if (!user) return res.status(404).json("user does not exist.");
            return res.status(409).json("Already activated.");
        }
        return res.status(200).json("activated");
    } catch (err) {
        return res.status(500).json(err);
    }
};

// get user activated status (GET by id)
exports.isActivated = async(req, res) => {
    try {
        let user = await User.findOne({ where: { id: parseInt(req.params.id) } });
        if (!user) return res.status(404).json("user does not exist.");
        return res.status(200).json(user.activated);
    } catch (err) {
        return res.status(500).json(err);
    }
};