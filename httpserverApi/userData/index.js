const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // console.log(req.url);
  if (req.url == "/") {
    res.end(" Welcome to the server : ");
  } else if (req.url == "/about") {
    res.end("This is about me page :");
  } else if (req.url == "/contact") {
    res.end("This is contact me page :");
  } else if (req.url == "/userapi") {
    // res.end("This is user api page :");

    console.log("This is user api page :");

    fs.readFile(
      "C:/Users/SUMIT/Documents/PROJECTS/node/httpserverApi/userApi/userapi.json",
      "utf-8",
      (err, data) => {
        console.log(data);
        res.end(data);
      }
    );
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("404 Page not found!!");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to the port number 8000");
});
