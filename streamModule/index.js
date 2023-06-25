const fs = require("fs");
const http = require("http");

const server = http.createServer();

// load full data then display
// 1st way

server.on("request", (req, res) => {
  //   fs.readFile("input.txt", (err, data) => {
  //     if (err) return console.log(err);
  //     res.end(data.toString());
  //   });

  //2nd way (streaming) - displaying code line by line
  //   const rstream = fs.createReadStream("input.txt"); //creating readable stream
  //   rstream.on("data", (chunkdata) => {
  //     res.write(chunkdata);
  //   });
  //   rstream.on("end", () => {
  //     res.end();
  //   });
  //   rstream.on("error", (err) => {
  //     res.end("File not found");
  //   });

  // 3rd way

  const rstream = fs.createReadStream("input.txt");
  rstream.pipe(res);
});

server.listen(8000, "127.0.0.1");
