const db = require("../models");

module.exports = {
  create: function(req, res) {
    console.log("create hit");
    db.userTeam
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.userTeam
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbuserTeam => res.json(dbuserTeam))
      .catch(err => res.status(422).json(err));
  },
  delete: function(req, res) {
    db.userTeam
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  deleteTeam: function(req, res) {
    db.userTeam
      .remove({})
      .then(res => console.log("team eliminated"))
      .catch(err => res.status(422).json(err));
  }
};
