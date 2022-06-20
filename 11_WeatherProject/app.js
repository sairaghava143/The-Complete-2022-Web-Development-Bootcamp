const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const query = req.body.query;

  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=a200d6e9954b7348d33b05181615b1b3&units=metric ";
  https.get(url, function (response) {
    console.log(response.statusCode);
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const iconUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      // iconUrl is the url of the icon
      res.write("<p>The weather is currently " + description + "</p>");
      res.write(
        "<h1>The temperature is " +
          query +
          " is " +
          temp +
          " degrees Celsius</h1>"
      );
      res.write("<img src=" + iconUrl + ">");
      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log("server is up and running");
});
