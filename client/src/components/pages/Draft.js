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
// import { CardTitle } from "reactstrap";

class Draft extends Component {
  state = {
    players: [1, 2, 3, 4, 5, 6],
    playerOrder: [
      {
        playerNumber: 1,
        orderNumber: 0,
        name: "User"
      },
      {
        playerNumber: 2,
        orderNumber: 0,
        name: "Bob"
      },
      {
        playerNumber: 3,
        orderNumber: 0,
        name: "Dave"
      },
      {
        playerNumber: 4,
        orderNumber: 0,
        name: "Wade"
      },
      {
        playerNumber: 5,
        orderNumber: 0,
        name: "Mark"
      },
      {
        playerNumber: 6,
        orderNumber: 0,
        name: "Jack"
      }
    ],
    teamPlayers: [],
    userTeam: [],
    bobsTeam: [],
    davesTeam: [],
    wadesTeam: [],
    marksTeam: [],
    jacksTeam: [],

    picker: () => {
      let players = this.state.players;
      let playerOrder = this.state.playerOrder;
      let teamPlayers = this.state.teamPlayers;

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
      playerOrder.forEach(object => this.state.teamMaker(object));
    },

    tryAgain: () => {
      let teamPlayers = this.state.teamPlayers;
      let random = Math.floor(Math.random() * 10);
      this.state.playerValidation(teamPlayers[random]);
    },

    playerValidation: selection => {
      console.log("validation");
      if (selection.selected === false) {
        selection.selected = true;
        console.log("before");
        return true;
      } else {
        this.state.tryAgain();
      }
    },

    userPrompt: () => {},

    teamMaker: team => {
      let teamPlayers = this.state.teamPlayers;
      let random = Math.floor(Math.random() * 10);
      // console.log(teamPlayers[random]);
      switch (team.name) {
        case "Bob":
          this.state.playerValidation(teamPlayers[random]);
          this.state.bobsTeam.push(teamPlayers[random]);
          console.log(this.state.bobsTeam);
          break;
        case "Dave":
          this.state.playerValidation(teamPlayers[random]);
          this.state.davesTeam.push(teamPlayers[random]);
          console.log(this.state.davesTeam);
          break;
        case "Wade":
          this.state.playerValidation(teamPlayers[random]);
          this.state.wadesTeam.push(teamPlayers[random]);
          console.log(this.state.wadesTeam);
          break;
        case "Mark":
          this.state.playerValidation(teamPlayers[random]);
          this.state.marksTeam.push(teamPlayers[random]);
          console.log(this.state.marksTeam);
          break;
        case "Jack":
          this.state.playerValidation(teamPlayers[random]);
          this.state.jacksTeam.push(teamPlayers[random]);
          console.log(this.state.jacksTeam);
          break;
        case "User":
          // this.state.userPrompt();
          break;
      }
      // if (teamPlayers[random].selected === false) {
      //   teamPlayers[random].selected = true;
      // } else {
      //   this.state.teamMaker();
      // }
    },

    playerTeamJoin: event => {
      // let userTeam = this.state.userTeam;
      console.log(this.state.teamPlayers.slice(0, 10));
      console.log(event.target);
      console.log(event.target.id);
      console.log(event.target.selected);
      console.log(event.target.name);

      // console.log(userTeam)
      // if (event.target.selected === false) {
      //   event.target.selected = true;
      //   userTeam.push({
      //     selected: event.target.selected,
      //     id: event.target.id,
      //     name: event.target.name,
      //     position: event.target.position,
      //     team: event.target.team,
      //     rank: Number.parseInt(event.target.rank),
      //     benched: true
      //   });
      //   console.log(userTeam)
      // }
      // else {
      //   console.log("seems a miss")
      // }
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
            name={order.name}
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
            id={choices._id}
          />
        ))}
      </Wrapper>
    );
  }
}

export default Draft;
