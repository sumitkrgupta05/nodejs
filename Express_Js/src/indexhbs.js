const express = require("express");
const app = express();
const path = require("path");
const port = 8000;
const hbs = require("hbs");
const { resolveAny } = require("dns");

//built in middleware
const staticPath = path.join(__dirname, "../public");
// app.use(express.static(staticPath));

//to set the view engine
app.set("view engine", "hbs");

//to set views folder name
const templatePath = path.join(__dirname, "../templates/views");
app.set("views", templatePath);

const partialsPath = path.join(__dirname, "../templates/partials");
hbs.registerPartials(partialsPath);

//template engine route
app.get("/", (req, res) => {
  res.render("index.hbs");
});

app.get("/about", (req, res) => {
  res.render("about");
});

// app.get("/", (req, res) => {
//   res.send("Hello from the server!!");
// });

app.get("/about/*", (req, res) => {
  res.render("404", {
    errorcomment: "Oops this about us page not found!",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    errorcomment: "Oops page not found!",
  });
});

app.listen(port, () => {
  console.log(`Listening to the port ${port}`);
});
