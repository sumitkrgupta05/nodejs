const { info } = require("console");
const fs = require("fs");

//Creating a new folder
// fs.mkdirSync("sumit");

//creating a new file and some info
// fs.writeFileSync("sumit/bio.txt", "Myself sumit pursuing btech in cse branch.");

// adding some info
// fs.appendFileSync(
//   "sumit/bio.txt",
//   " I'm from jamshedpur and loves to hungout with friends!!"
// );

// reading without buffer data by data encoding
// const data = fs.readFileSync("sumit/bio.txt","utf-8")
// console.log(data);

// renaming the file
// fs.renameSync("sumit/bio.txt", "sumit/info.txt");

// deleting the txt file
// fs.unlinkSync("sumit/info.txt");

// deleting the folder 
// fs.rmdirSync("sumit");