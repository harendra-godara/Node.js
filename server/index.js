const fs = require("fs");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.end("Hello From Home Page!");
});

app.get("/about", (req, res) => {
  return res.end(`Hello ${req.query.name}`);
});

// function myHandler(req, res) {
//   if (req.url === "/favicon.ico") return res.end();
//   const myUrl = url.parse(req.url, true);
//   // console.log(myUrl);
//   const log = `${new Date()} ${req.method} ${req.url}: New Req Recived\n`;
//   fs.appendFile("log.txt", log, (err, data) => {
//     switch (myUrl.pathname) {
//       case "/":
//         if (req.method === "GET") res.end("HomePage");
//         break;
//       case "/about":
//         const username = myUrl.query.myname;
//         res.end(`HI, ${username}`);
//         break;
//       case "/signup":
//         if (req.method === "GET") res.end("This is a Signup Form");
//         else if (req.method === "POST") res.end("Seccess");
//       default:
//         res.end("404 Page Not Found!");
//     }
//   });
// }

app.listen(8000, () => console.log("Sever Started!"));

// const myserver = http.createServer(app);

// myserver.listen(8000, () => {
//   console.log("Sever Started!");
// });
