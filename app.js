const express = require("express");
const bodyParser = require("body-parser");
const mongoose=require("mongoose");
const app = express();
Feed = require("./models/feed");


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));





app.get("/", function(req,res) {
  res.render("home");
});
app.get("/home", function(req,res) {
  res.render("home");
});
app.get("/about", function(req,res) {
  res.render("about");
});
app.get("/projects", function(req,res) {
  res.render("projects");
});
app.get("/contact", function(req,res) {
  res.render("contact");
});
app.get("/services", function(req,res) {
  res.render("services");
});






var port = process.env.PORT || 3000;
app.listen(port, function() {
      console.log("server is started on port 3000");});
