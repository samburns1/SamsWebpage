const http = require("http");
var express = require("express");
var app = express();
app.get("/", function (req, res) {
  res.sendFile("/Users/samuelburns/Desktop/samWebpage/main/main.html");
});

app.get("/sampic", function (req, res) {
  res.sendFile("/Users/samuelburns/Desktop/samWebpage/main/sam.png");
});

app.listen(3000);
