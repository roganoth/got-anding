import React, { Component } from "react";
import API from "../utils/API";
import PlayerCard from "../PlayerCard";
import ShuffleButton from "../ShuffleButton";
import Wrapper from "../Wrapper";
// import Grid from "./../NflPlayers/index";
// import EnhancedTable from "./../Table/index";
// import Example from "./../Table";
// import { Container, Col, Row } from "./../Grid";
import TempGrid from "./../TempGrid/index";

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
      // console.log(playerOrder);
      playerOrder.sort((a, b) => a.orderNumber - b.orderNumber);
      // console.log("----------------------------------------------------");
      // console.log(playerOrder);
      this.setState({
        playerOrder: playerOrder
      });
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

    playerTeamJoin: () => {
      let userTeam = this.state.userTeam;
      document.getElementById("teamButton").onclick(function (event) {
        if (event.target.selected === false) {
          event.target.selected = true;
          userTeam.push(event.target);
          console.log(userTeam)
        }
        else {
          console.log("seems a miss")
        }
      })
    }
  };

  componentDidMount() {
    this.loadPlayers();
  }

  loadPlayers = () => {
    API.getPlayers()
      .then(res => this.setState({ teamPlayers: res.data }))
      .catch(err => console.log(err));
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
        {this.state.teamPlayers.slice(0, 250).map(choices => (
          <TempGrid
            key={choices.name}
            name={choices.name}
            position={choices.position}
            team={choices.team}
            rank={choices.rank}
            selected={choices.selected}
            choose={this.state.playerTeamJoin}
          />
        ))}
      </Wrapper>
    );
  }
}

export default Draft;
