const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const path = require("path");
const axios = require("axios");
const cheerio = require("cheerio");
require("dotenv").config();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
const db = require("./models");
const keys = require("./config/keys.js");

const app = express();
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  app.use(express.static("./"));
}

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

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

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ffb", function(
  err,
  data
) {
  if (err) {
    console.log(err);
  } else {
    console.log("connected");
  }
});

app.use(routes);
// app.get("/draft", function(req, res) {
//   axios
//     .get(
//       "https://www.fantasyfootballnerd.com/service/draft-rankings/json/8f5fyberwf32" +
//         keys.keys.API_Key
//     )
//     .then(function(data) {
//       console.log(data);
//       const players = data.data.DraftRankings;
//       console.log(players);
//       res.send(players);
//       for (let i = 0; i < players.length; i++) {
//         const name = players[i].displayName;
//         const position = players[i].position;
//         const team = players[i].team;
//         const rank = players[i].overallRank;
//         db.rankings.insert(
//           {
//             name: name,
//             position: position,
//             team: team,
//             rank: rank,
//             selected: false
//           },
//           function(err, inserted) {
//             if (err) {
//               console.log(err);
//             } else {
//               console.log(inserted);
//             }
//           }
//         );
//       }
//     });
// });

// console.log("TEST123");

app.listen(PORT, function() {
  console.log("App running on http://localhost:" + PORT);
});
