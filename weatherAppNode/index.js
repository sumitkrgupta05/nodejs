const http = require("http");
const fs = require("fs");
var requests = require("requests");

const homeFile = fs.readFileSync("home.html", "utf-8");

const replaceVal = (tempVal, orgVal) => {
  let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
  temperature = tempVal.replace("{%tempmin%}", orgVal.main.temp_min);
  temperature = tempVal.replace("{%tempmax%}", orgVal.main.temp_max);
  temperature = tempVal.replace("{%location%}", orgVal.name);
  temperature = tempVal.replace("{%country%}", orgVal.sys.country);
  temperature = tempVal.replace("{%tempStatus%}", orgVal.weather[0].main);
  return temperature;
};

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    requests(
      "https://api.openweathermap.org/data/2.5/weather?q=pune&units=metric&appid=3dec4f8d9bd6dfd5e787982ef81cbcbe"
    )
      .on("data", (chunk) => {
        const objdata = JSON.parse(chunk);
        const arrData = [objdata];
        // console.log(arrData[0].main.temp);

        //fetch and using in multiple lines

        // const realTimeData = arrData.map((val) => {
        //   replaceVal(homeFile, val);
        // });

        //one line code for above lines
        const realTimeData = arrData
          .map((val) => replaceVal(homeFile, val))
          .join(" ");
        res.write(realTimeData);
        // console.log(realTimeData);
      })
      .on("end", (err) => {
        if (err) return console.log("Connection closed due to errors", err);
        res.end();
      });
  }
});
server.listen(8000, "127.0.0.1");
