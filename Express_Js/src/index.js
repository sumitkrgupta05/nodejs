const express = require("express");
const app = express();
const path = require("path");
const port = 8000;

//built in middleware
const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send("Hello from the server!!");
});

app.listen(port, () => {
  console.log(`Listening to the port ${port}`);
});
