const express = require("express");

const app = express();

const userRouter = require("./routes/user");

const { connectMongoDb } = require("./connection");

const { logReqRes } = require("./middlewares");

// Connection
connectMongoDb("mongodb://127.0.0.1:27017/dataBase-1");

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));

// Router
app.use("/api/user", userRouter);

// Server
app.listen(8000, () => {
  console.log("Server Started! at port 8000");
});
