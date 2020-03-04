const db = require("../models");

module.exports = {
  create: function(req, res) {
    db.userTeam
      .create(req.body)
      .then(dbuserTeam => res.json(dbuserTeam))
      .catch(err => res.status(422).json(err));
    console.log("yoo");
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
  }
};
