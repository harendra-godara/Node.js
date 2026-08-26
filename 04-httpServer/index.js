const http = require("http");
const fs = require("fs");
const url = require("url");
const myServer = http.createServer((req, res) => {
  // console.log(`${Date.now()}: New Req Received`);
  // console.log("New Req Rec");
  // console.log(req.headers);
  // console.log(req);
  if (req.url === "/favicon.ico") return res.end();
  const log = `${new Date()} ${req.method} ${req.url} : New Req Received\n`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  fs.appendFile("./log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("HomePage");
        break;

      case "/about":
        const username = myUrl.query.name;
        res.end(`Hey my name is ${username}`);
        break;

      case "/sinup":
        if (req.method === "GET") res.end("This is Sinup Form");
        else if (req.method === "POST")
          // DB Query
          res.end("Seccess");
        break;

      default:
        res.end("404 Page Not Found!");
        break;
    }
  });
});
myServer.listen(8000, () => {
  console.log("Server Started!");
});
