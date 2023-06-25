//routing in express js
const express = require("express");
const res = require("express/lib/response");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to my home page");
});

app.get("/about", (req, res) => {
  res.send("Welcome to my about page");
});

app.get("/contact", (req, res) => {
  res.send("Welcome to my contact page");
});

app.get("/temp", (req, res) => {
  res.send("Welcome to my temperature page");
});

// method to write html
app.get("/page", (req, res) => {
  res.write("<h1>HTML PAGE </h1>");
  res.write(
    "<h4>this is an html page written in res.write() and res.send(); is used to end the file</h4>"
  );
  res.send();
});

// method to write array of an object
app.get("/arrayofobject", (req, res) => {
  res.send([
    {
      roll: "cse/081/2021",
      name: "sumit",
      college: "rvscet",
    },
    {
      roll: "cse/081/2021",
      name: "sumit",
      college: "rvscet",
    },
    {
      roll: "cse/081/2021",
      name: "sumit",
      college: "rvscet",
    },
    {
      roll: "cse/081/2021",
      name: "sumit",
      college: "rvscet",
    },
    {
      roll: "cse/081/2021",
      name: "sumit",
      college: "rvscet",
    },
    {
      roll: "cse/081/2021",
      name: "sumit",
      college: "rvscet",
    },
    {
      roll: "cse/081/2021",
      name: "sumit",
      college: "rvscet",
    },
  ]);
});

//method to write json file
app.get("/json", (req, res) => {
  res.send({
    roll: "cse/081/2021",
    name: "sumit",
    college: "rvscet",
  });
});

// another method to write json file
app.get("/usejson", (req, res) => {
  res.json([
    {
      id: 4,
      name: "summo",
    },
    {
      id: 9,
      name: "amit",
    },
  ]);
});

app.listen(8000, () => {
  console.log("Listening the port at 8000");
});
