const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Players.find(req.query)
      .sort({ rank: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  refresh: function(req, res) {
    app.get("/draft", function(req, res) {
      axios
        .get(
          "https://www.fantasyfootballnerd.com/service/draft-rankings/json/8f5fyberwf32" +
            keys.keys.API_Key
        )
        .then(function(data) {
          const players = data.data.DraftRankings;
          console.log(players);
          res.send(players);
          for (let i = 0; i < players.length; i++) {
            const name = players[i].displayName;
            const position = players[i].position;
            const team = players[i].team;
            const rank = players[i].overallRank;
            db.rankings.insert(
              {
                name: name,
                position: position,
                team: team,
                rank: rank,
                selected: false
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
  }

  // update: function(req, res) {
  //   db.Players.findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
