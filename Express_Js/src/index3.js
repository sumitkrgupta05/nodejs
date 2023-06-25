const path = require("path");
const express = require("express");
const app = express();

// from src to main folder and then to public
// console.log(path.join(__dirname, "../public"));

const staticPath = path.join(__dirname, "../public");

//built in middleware
// adding static website  
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send("Hello world from the expressjs side!!");
});

app.get("/sumit", (req, res) => {
  res.send("Hello world from the sumit side!!");
});

app.listen(8000, () => {
  console.log("Listening the port at 8000");
});
