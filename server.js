const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const path = require("path");
const axios = require("axios");
const cheerio = require("cheerio");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
const db = require("./models");
const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ffb", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

// const databaseUrl = "ffb";
// const collections = ["title", "link"];

// const db = mongojs(databaseUrl, collections);

// db.on("error", function(error) {
//   console.log("Database Error:", error);
// });

app.get("/all", function(req, res) {
  db.scrappedData.find({}, function(error, found) {
    if (error) {
      console.log(error);
    } else {
      res.json(found);
    }
  });
});

app.get("/scrape", function(req, res) {
  axios.get("https://www.giants.com/").then(function(response) {
    const $ = cheerio.load(response.data);
    $(".nfl-o-headlinestack__itemcontent").each(function(i, element) {
      const title = $(element)
        .children("a")
        .text();
      const link = $(element)
        .children("a")
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

  res.sendFile(path.join(__dirname + "/public/index.html"));
});
