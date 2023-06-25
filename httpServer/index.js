const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req.url);
  if (req.url == "/") {
    res.end(" Welcome to the server : ");
  } else if (req.url == "/about") {
    res.end("This is about me page :");
  } else if (req.url == "/contact") {
    res.end("This is contact me page :");
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("404 Page not found!!");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to the port number 8000");
});
