import axios from "axios";

export default {
    getPlayers: function() {
        return axios.get("/api/players");
    },
    updatePlayer: function() {
        return axios.update("/api/players" + id);
    }
}