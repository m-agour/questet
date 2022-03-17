// get the client
const { query } = require("express");
const mysql = require("mysql2");

pool = mysql.createPool({
    connectionLimit: 12,
    password: "FArs@2013",
    user: "root",
    host: "127.0.0.1",
    database: "questet",
});

// pool.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
// });

let quesdb = {};

quesdb.all = async() => {
    return new Promise((accept, reject) => {
        let q = `SELECT * FROM user;`;
        pool.query(q, (result, err) => {
            if (err) {
                return reject(err);
            }
            return accept(result);
        });
    });
};

module.exports = quesdb;