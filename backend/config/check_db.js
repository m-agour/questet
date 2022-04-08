require("dotenv").config();

const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "",
});
connection
  .query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`)
  .then(console.log("hello"));

