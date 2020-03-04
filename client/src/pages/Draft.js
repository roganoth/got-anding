import React, { Component } from "react";
import API from "./../utils/API";
import PlayerCard from "../components/PlayerCard";
import ShuffleButton from "../components/ShuffleButton";
import Wrapper from "../components/Wrapper";
// import Grid from "./../NflPlayers/index";
// import EnhancedTable from "./../Table/index";
// import Example from "./../Table";
// import { Container, Col, Row } from "./../Grid";
import TempGrid from "../components/TempGrid/index";
import UserTeam from "../components/UserTeam";
// import { CardTitle } from "reactstrap";
// import SaveButton from "./../SaveButton";

class Draft extends Component {
  state = {
    players: [1, 2, 3, 4, 5, 6],
    playerOrder: [
      {
        playerNumber: 1,
        orderNumber: 0,
        name: "User",
        team: []
      },
      {
        playerNumber: 2,
        orderNumber: 0,
        name: "Bob",
        team: []
      },
      {
        playerNumber: 3,
        orderNumber: 0,
        name: "Dave",
        team: []
      },
      {
        playerNumber: 4,
        orderNumber: 0,
        name: "Wade",
        team: []
      },
      {
        playerNumber: 5,
        orderNumber: 0,
        name: "Mark",
        team: []
      },
      {
        playerNumber: 6,
        orderNumber: 0,
        name: "Jack",
        team: []
      }
    ],
    teamPlayers: [],
    selectedPlayers: [],
    userTeam: [],

    picker: () => {
      let players = this.state.players;
      let playerOrder = this.state.playerOrder;
      // let teamPlayers = this.state.teamPlayers;

      for (let i = 0; i < players.length; i++) {
        let j = Math.floor(Math.random() * i + 1);
        [players[i], players[j]] = [players[j], players[i]];
      }
      for (let i = 0; i < playerOrder.length; i++) {
        playerOrder[i].orderNumber = players[i];
      }
      playerOrder.sort((a, b) => a.orderNumber - b.orderNumber);
      this.setState({
        playerOrder: playerOrder
      });
      for (let i = 0; i < 4; i++) {
        let teamPlayers = this.state.teamPlayers;
        // if (playerOrder.name !== "User") {
        let random = Math.floor(Math.random() * 3);
        let userTeam = this.state.userTeam;
        playerOrder.forEach(object => {
          if (object.name !== "User") {
            teamPlayers[random].selected = true;
            this.state.selectedPlayers.push(teamPlayers[random]);
            object.team.push(teamPlayers[random]);
            console.log(
              "Player Selectetd: " + JSON.stringify(teamPlayers[random].name)
            );
            console.log(
              "name: " +
                JSON.stringify(object.name) +
                "team: " +
                JSON.stringify(object.team)
            );
            console.log(this.state.selectedPlayers);
            teamPlayers.splice(random, 1);
          } else {
            userTeam.push(teamPlayers[random]);
            object.team.push(teamPlayers[random]);
            teamPlayers.splice(random, 1);
          }
          console.log(this.state.userTeam);
          this.setState({ userTeam: userTeam });
        });
      }
      // }
    },

    playerValidation: selection => {
      let selectedPlayers = this.state.selectedPlayers;
      console.log("validation");
      if (selectedPlayers.includes(selection)) {
        this.state.tryAgain();
      } else {
        selection.selected = true;
        selectedPlayers.push(selection);
      }
    },

    userPrompt: () => {
      window.confirm("Click a Player to add to Your Team, then Continue");
      if (true) {
        return true;
      }
    },

    playerTeamJoin: ({ name, position, team, rank }) => {
      console.log(name);
      console.log(position);
      console.log(team);
      console.log(rank);
      this.state.userTeam.push({ name, position, team, rank });
    }
  };

  save = () => {
    API.saveTeam({
      name: this.state.userTeam.name,
      position: this.state.userTeam.position,
      team: this.state.userTeam.team,
      rank: this.state.userTeam.rank
    })
      .then(res => console.log("team saved " + res))
      .catch(err => console.log(err));
  };

  delete = id => {
    API.deletePlayer(id)
      .then(res => console.log("Player Deleted"))
      .catch(err => console.log(err));
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
            team={order.team}
          />
        ))}
        <ShuffleButton picker={this.state.picker} />
        {/* <SaveButton saveButton={this.state.save(this.state.userTeam)} /> */}
        <UserTeam
          name={this.state.userTeam.name}
          key={this.state.userTeam.name}
        />
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
