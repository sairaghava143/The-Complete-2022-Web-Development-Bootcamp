const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", function (req, res) {
  res.sendFile(__dirname+"/index.html");
});
app.get("/bmiCalculator", function (req, res) {
  res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/", function (req, res) {
    // res.send("thanks for calculating");
    // console.log(req.body);
    var n1=Number(req.body.num1);
    var n2=Number(req.body.num2);
    var result=n1+n2;
    res.send("calculation finished: " + result);


})

app.post("/bmiCalculator.html", function (req, res) {

  var n1=parseFloat(req.body.weight);
  var n2=parseFloat(req.body.height);
  var result=n1/(n2*n2);
  res.send("BMI : " + result);


})

app.listen(3000, function () {
  console.log("server has started at port 3000!");
});
