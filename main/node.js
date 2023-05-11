const http = require("http");
var express = require("express");
var app = express();
const fs = require("fs");
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/createnewuser", (req, res) => {
  const user = req.body.userdecoy;
  const pass = req.body.passdecoy;

  //
  var text = "";
  var lines = "";
  data = fs.readFileSync(
    "/Users/samuelburns/Desktop/samWebpage/main/database.txt",
    "utf8",
    (err) => {
      if (err) throw err;
    }
  );

  text = data.toString();
  lines = text.split("\n");

  var valid = true;
  for (var i = 0; i < lines.length; i++) {
    const info = lines[i].split("-");
    if (user == info[0]) {
      valid = false;
      res.sendFile("/Users/samuelburns/Desktop/samWebpage/main/error.html");
      res.json(info[0]);

      console.log("username taken");
    }
  }
  if (valid) {
    console.log(valid);
    console.log(user + "-" + pass + "\n");
    res.sendFile("/Users/samuelburns/Desktop/samWebpage/main/login.html");
    console.log("i ran");
    fs.appendFile(
      "/Users/samuelburns/Desktop/samWebpage/main/database.txt",
      "\n" + user + "-" + pass,
      (err) => {
        if (err) throw err;
      }
    );
    console.log("i ran again");
  }
});

app.post("/toresume", (req, res) => {
  res.sendFile("/Users/samuelburns/Desktop/samWebpage/main/resume.html");
});

app.post("/tohome", (req, res) => {
  res.sendFile("/Users/samuelburns/Desktop/samWebpage/main/main.html");
});

app.post("/login", (req, res) => {
  const user = req.body.user;
  const pass = req.body.pass;
  var text = "";
  var lines = "";
  data = fs.readFileSync(
    "/Users/samuelburns/Desktop/samWebpage/main/database.txt",
    "utf8",
    (err) => {
      if (err) throw err;
    }
  );

  text = data.toString();
  lines = text.split("\n");

  var access = false;
  for (var i = 0; i < lines.length; i++) {
    const info = lines[i].split("-");
    if (user == info[0] && pass == info[1]) {
      res.sendFile("/Users/samuelburns/Desktop/samWebpage/main/main.html");
      console.log("entry granted");
      access = true;
    }
  }
  if (!access)
    res.sendFile("/Users/samuelburns/Desktop/samWebpage/main/error.html");

  // console.log(
  //   `Received form submission with user=${user} and password=${pass}`
  // );
});

app.get("/", function (req, res) {
  res.sendFile("/Users/samuelburns/Desktop/samWebpage/main/login.html");
});

// app.get("/main", function (req, res) {
//   res.sendFile("/Users/samuelburns/Desktop/samWebpage/main/main.html");
// });

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

app.get("/resume.css", function (req, res) {
  res.sendFile("/Users/samuelburns/Desktop/samWebpage/main/resume.css");
});

app.get("/main.css", function (req, res) {
  res.sendFile("/Users/samuelburns/Desktop/samWebpage/main/main.css");
});

app.get("/login.css", function (req, res) {
  res.sendFile("/Users/samuelburns/Desktop/samWebpage/main/login.css");
});

app.get("/loginerror", function (req, res) {
  res.sendFile("/Users/samuelburns/Desktop/samWebpage/main/error.html");
});

app.get("/newuser", function (req, res) {
  res.sendFile("/Users/samuelburns/Desktop/samWebpage/main/newuser.html");
});

app.get("/newuser.css", function (req, res) {
  res.sendFile("/Users/samuelburns/Desktop/samWebpage/main/newuser.css");
});

app.get("/datatxt", (req, res) => {
  res.sendFile("/Users/samuelburns/Desktop/samWebpage/main/database.txt");
});
app.listen(3000);
