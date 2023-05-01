const http = require("http");
var express = require("express");
var app = express();
app.get("/", function (req, res) {
  res.sendFile("/Users/samuelburns/Desktop/samWebpage/main/main.html");
});

app.get("/resume", function (req, res) {
  res.sendFile("/Users/samuelburns/Desktop/samWebpage/main/resume.html");
});

app.get("/sampic", function (req, res) {
  res.sendFile("/Users/samuelburns/Desktop/samWebpage/main/sam.png");
});

app.get("/insta", function (req, res) {
  res.sendFile("/Users/samuelburns/Desktop/samWebpage/main/insta.png");
});

app.get("/email", function (req, res) {
  res.sendFile("/Users/samuelburns/Desktop/samWebpage/main/email.png");
});

app.listen(3000);
