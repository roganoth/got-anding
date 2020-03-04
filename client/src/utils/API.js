import axios from "axios";

export default {
  getPlayers: function() {
    return axios.get("/api/players");
  },
  updatePlayers: function(id) {
    return axios.update("/api/players" + id);
  },
  saveTeam: function(teamData) {
    return axios.post("/api/teams", teamData);
  },
  deletePlayer: function(id) {
    return axios.delete("/api/players" + id);
  }
};
