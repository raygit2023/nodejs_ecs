const express = require("express");

const app = express();
// Function to serve all static files
// inside public directory.
app.use('/public',express.static('public'));
app.use('/images', express.static('images'));

app.get("/", (req, res) => {
  res.send("<h1>Welcome to my Express Application</h1><br> running in aws ecs service with ALB with public and images static page. <br> you can access images by /images/privacy.jpg ");
});

app.get("/info", (req, res) => {
  res.send("my information page with ALB in ECS EC2 ");
});
app.get("/about", (req, res) => {
  res.send("About page with ALB in ECS EC2 ");
});
app.listen(3000, () => {
  console.log("listening");
});
