
const express = require('express');
const app = express();
app.get('/', function(req, res){
    res.send("<h1>Hello world!</h1>");
})
app.get('/contact', function(req, res){
    res.send("Contact me at sairaghava@gmail.com</a>");
})
app.get('/about', function(req, res){
    res.send("Sai raghava 20 years age ");
})
app.get('/hobbies', function(req, res){
    res.send("<ul><li>chess</li><li>tea</li><li>coffee</li></ul>");
})
app.listen(3000, function(){
    console.log("server has started at port 3000");
});
