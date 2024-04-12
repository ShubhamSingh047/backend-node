const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") {
    return res.end();
  }
  const log = `${Date.now()}: ${req.url} New request recived !\n`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("Hello from server");
        break;
      case "/about":
        const querry = myUrl.query?.myName;
        res.end(`Hello ${querry || "test"}`);
        break;
      case "/contact":
        res.end("Please reach out to me on my github");
        break;
      default:
        res.end("404!");
        break;
    }
  });
});

myServer.listen(8000, () => console.log("server started"));
