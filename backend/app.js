const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const indexRouter = require("./routes/index");
const apiRouter = require("./routes/api");
// const notFind = require("./middleware/not-find");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/", indexRouter);
app.use("/api", apiRouter);

// catch 404 and forward to error handler
// app.use(notFind);

// // error handler
// app.use((err, req, res) => {
//     // render the error page
//     res.status(500);
//     res.render("error");
// });

const port = process.env.PORT || "5000";

app.listen(port, () => {
    console.log(`Listen on ${port}`);
});