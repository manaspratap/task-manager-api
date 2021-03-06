const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT;

// auto parse incoming json
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// Without middleware: new request -> run route handler
// With middleware: new request -> do something -> run route handler

module.exports = app;
