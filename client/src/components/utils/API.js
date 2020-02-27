import axios from "axios";

export default {
  getPlayers: function() {
    return axios.get("/api/players");
  },
  updatePlayers: function(id) {
    return axios.update("/api/players" + id);
  }
};
