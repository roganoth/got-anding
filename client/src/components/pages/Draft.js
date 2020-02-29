import React, { Component } from "react";
import API from "../utils/API";
import PlayerCard from "../PlayerCard";
import ShuffleButton from "../ShuffleButton";
import Wrapper from "../Wrapper";
import Grid from "./../NflPlayers/index";

class Draft extends Component {
  state = {
    players: [1, 2, 3, 4, 5, 6],
    playerOrder: [
      {
        playerNumber: 1,
        orderNumber: 0
      },
      {
        playerNumber: 2,
        orderNumber: 0
      },
      {
        playerNumber: 3,
        orderNumber: 0
      },
      {
        playerNumber: 4,
        orderNumber: 0
      },
      {
        playerNumber: 5,
        orderNumber: 0
      },
      {
        playerNumber: 6,
        orderNumber: 0
      }
    ],
    teamPlayers: [],
    userTeam: [],

    picker: () => {
      let players = this.state.players;
      let playerOrder = this.state.playerOrder;

      for (let i = 0; i < players.length; i++) {
        let j = Math.floor(Math.random() * i + 1);
        [players[i], players[j]] = [players[j], players[i]];
      }
      for (let i = 0; i < playerOrder.length; i++) {
        playerOrder[i].orderNumber = players[i];
      }
      console.log(playerOrder);
      playerOrder.sort((a, b) => a.orderNumber - b.orderNumber);
      console.log("----------------------------------------------------");
      console.log(playerOrder);
      this.setState({
        playerOrder: playerOrder
      });
    },

    componentDidMount() {
      this.loadPlayers();
    },

    loadPlayers: () => {
      API.getPlayers()
        .then(res => this.setState({ teamPlayers: res.data }))
        .catch(err => console.log(err));
      this.state.teamPlayers.sort((a, b) => a.rank - b.rank);
      this.state.teamPlayers.slice(0, 149);
    },

    teamMaker: () => {
      let teamPlayers = this.state.teamPlayers;
      let random = Math.floor(Math.random() * 10);
      if (teamPlayers[random].selected === false) {
        teamPlayers[random].selected = true;
        // console.log(array[random]);
        // selected.push(teamPlayers[random]);
      } else {
        this.teamMaker();
      }
    },

    playerTeamJoin: event => {
      let userTeam = this.state.userTeam;
      if (event.target.selected === false) {
        event.target.selected = true;
        userTeam.push(event.target);
      }
    }
  };

  render() {
    return (
      <Wrapper>
        {this.state.playerOrder.map(order => (
          <PlayerCard
            key={order.playerNumber}
            playerNumber={order.playerNumber}
            orderNumber={order.orderNumber}
          />
        ))}
        <ShuffleButton picker={this.state.picker} />
        {/* {this.state.componentDidMount()} */}
        {this.state.teamPlayers.map(choices => (
          <Grid
            name={choices.name}
            position={choices.position}
            team={choices.team}
            rank={choices.rank}
            choose={this.state.playerTeamJoin}
          />
        ))}
      </Wrapper>
    );
  }
}

export default Draft;
