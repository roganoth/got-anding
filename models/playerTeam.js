const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playersSchema = new Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  team: { type: String, required: true },
  rank: { type: Number, required: true },
  selected: { type: Boolean, default: false }
});

const Players = mongoose.model("rankings", playersSchema);

module.exports = Players;
