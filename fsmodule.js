const fs = require("fs");

//creating a new file

// fs.writeFileSync(
//   "fsfile.txt",
//   "It will create a fsfile and store the info. If the file is already created then it will overwrite the message!!"
// );

//overwrite in a file

// fs.writeFileSync("fsfile.txt", "Sumit kumar gupta!!");

// fs.appendFileSync("fsfile.txt", " \n adding some more lines!!");

// const buf_data = fs.readFileSync("fsfile.txt");
// console.log(buf_data);

// Node.js include an addditional data type called Buffer(binary values)
// Mainly used in storing binary data

// *****
// previously notes can be seen

// const buf_data = fs.readFileSync("fsfile.txt");
// org_data = buf_data.toString();
// console.log(org_data);

// to rename a file
// fs.renameSync("fsfile.txt", "fsmoduleSync.txt");
