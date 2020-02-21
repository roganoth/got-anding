var express = require("express");
var mongojs = require("mongojs");
var logger = require("morgan");
var path = require("path");
var axios = require("axios");
require("dotenv").config();
const keys = require("./config/keys.js");

var app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

var databaseUrl = "news";
var collections = ["articles", "comments", "rankings"];

var db = mongojs(databaseUrl, collections);

db.on("error", function(error) {
  console.log("Database Error:", error);
});

app.get("/all", function(req, res) {
  db.scrappedData.find({}, function(error, found) {
    if (error) {
      console.log(error);
    } else {
      res.json(found);
    }
  });
});

app.get("/", function(req, res) {
  axios.get("https://www.nytimes.com/").then(function(response) {
    var $ = cheerio.load(response.data);
    $("").each(function(i, element) {
      var title = $(element)
        .children()
        .text();
      var link = $(element)
        .children()
        .attr("href");

      if (title && link) {
        db.scrappedData.insert(
          {
            title: title,
            link: link
          },
          function(err, inserted) {
            if (err) {
              console.log(err);
            } else {
              console.log(inserted);
            }
          }
        );
      }
    });
  });

  res.sendFile(path.join(__dirname + "/public/html/index.html"));
});

app.get("/draft", function(req, res) {
  axios
    .get(
      "https://www.fantasyfootballnerd.com/service/draft-rankings/json/" +
        keys.keys.API_Key
    )
    .then(function(data) {
      const players = data.data;
      console.log(players);
      res.send(players);
      players.forEach(element => {
        db.rankings.insert(
          {
            name: players.displayName,
            position: players.position,
            team: players.team,
            rank: players.overallRanking
          },
          function(err, inserted) {
            if (err) {
              console.log(err);
            } else {
              console.log(inserted);
            }
          }
        );
      });
    });
});

app.listen(3000, function() {
  console.log("App running on http://localhost:3000");
});
