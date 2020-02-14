var express = require("express");
var mongojs = require("mongojs");
var logger = require("morgan");
var path = require("path");
var axios = require("axios");

var app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

var databaseUrl = "news";
var collections = ["articles", "comments"];

var db = mongojs(databaseUrl, collections);

app.listen(3000, function() {
  console.log("App running on http://localhost:3000");
});
