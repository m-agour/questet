require("dotenv").config();
const mysql = require("mysql2/promise");
const { Sequelize } = require("sequelize");

// module.exports = db = {};

// initialize();

// async function initialize() {
//     // create db if it doesn't already exist
//     const connection = await mysql.createConnection(
//         process.env.DB_HOST,
//         process.env.DB_PORT,
//         process.env.DB_USER,
//         process.env.DB_PASSWORD
//     );
//     await connection.query(
//         `CREATE DATABASE IF NOT EXISTS \`${process.env.DB}\`;`
//     );

//     // connect to db
//     const sequelize = new Sequelize(database, user, password, {
//         dialect: "mysql",
//     });

//     // init models and add them to the exported db object
//     db.User = require("../users/user.model")(sequelize);

//     // sync all models with database
//     await sequelize.sync();
// }

mysql
    .createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
    })
    .then((connection) => {
        connection
            .query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB};`)
            .then((res) => {
                console.info("Database create or successfully checked");
                process.exit(0);
            });
    });
// module.exports = db;