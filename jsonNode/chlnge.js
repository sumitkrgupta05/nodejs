//   1. convert to JSON
//   2.add in another file
//   3. reafile
//   4.again convert back to js obj
//   5. console.log

const { json } = require("express/lib/response");
const fs = require("fs");

const info = {
  fname: "sumit",
  lname: "kumar",
  age: 19,
  college: "rvscet",
};

//converting into json
const jsonData = JSON.stringify(info);

//adding into another file
// fs.writeFile("json1.json", jsonData, (err) => {
//   console.log("Done");
// });

//reading file data
// fs.readFile("json1.json", "utf-8", (err, data) => {
//   console.log(err);
//   console.log(data);
// });

//converting into object again
const objData = JSON.parse(jsonData);
console.log(objData);
