const express = require("express");
// const http = require("http");

const app = express();

app.get("/", (req, res) => {
  res.end("Hello from home page.");
});

app.get("/about", (req, res) => {
  res.end(`Hello ${req.query.name}`);
});

// const myServer = http.createServer(app);

// myServer.listen(8000, () => {
//   console.log("Server Started!");
// });

app.listen(8000, () => {
  console.log("Server Started!");
});
