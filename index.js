const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Welcome to my Express Application</h1><br> running in aws ecs service");
});

app.get("/info", (req, res) => {
  res.send("my information page ");
});

app.listen(3000, () => {
  console.log("listening");
});
