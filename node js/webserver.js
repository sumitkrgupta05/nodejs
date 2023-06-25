const http = require("http");
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url == "/") {
    res.statusCode = 200;
    res.end("<h1>This is sumit</h1> <p>hiiiiiiiiiiiiiiiiiiiii</p>");
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.end("<h1>About me</h1> <p>I love to play games!!</p>");
  } else {
    res.statusCode = 404;
    res.end("<h1>Error!!</h1>  <p>Page not found</p>");
  }
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>This is Sumit Kumar</h1> <p>Currently learning node.js</p>");
});
server.listen(port, () => {     
  console.log(`Server is listening on port ${port}`);
});
