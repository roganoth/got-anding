const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.playerTeam
      .find(req.query)
      .sort({ rank: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.playerTeam
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
