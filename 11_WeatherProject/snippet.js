const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  res.send("server is up!");
});
app.post("/", function (req, res) {
  console.log("post request received");
});
app.listen(3000, function () {
  console.log("listening on port 3000");
});
