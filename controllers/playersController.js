const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Players.find(req.query)
      .sort({ rank: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
  // update: function(req, res) {
  //   db.Players.findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
