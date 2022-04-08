"use strict";
require("dotenv").config();

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const db = {};
const mysql = require("mysql2");

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            acquire: 3000,
            idle: 10000,
        },
    }
);

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "",
});
connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`);
fs.readdirSync(__dirname)
    .filter((file) => {
        return (
            file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
        );
    })
    .forEach((file) => {
        let f = require(path.join(__dirname, file));
        try {
            const model = f(sequelize, Sequelize.DataTypes);
            db[model.name] = model;
        } catch (e) {
            console.log(path.join(__dirname, file));
        }
    });

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
sequelize.sync();
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;