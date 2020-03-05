const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userTeamSchema = new Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  team: { type: String, required: true },
  rank: { type: Number, required: true },
  benched: { type: Boolean, default: true }
});

const userTeam = mongoose.model("UserTeam", userTeamSchema);

module.exports = userTeam;
