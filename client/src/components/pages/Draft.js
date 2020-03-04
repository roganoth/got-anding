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
      // console.log(playerOrder);
      playerOrder.sort((a, b) => a.orderNumber - b.orderNumber);
      // console.log("----------------------------------------------------");
      // console.log(playerOrder);
      this.setState({
        playerOrder: playerOrder
      });
      for (let i = 0; i < 4; i++) {
        let teamPlayers = this.state.teamPlayers;
        // if (playerOrder.name !== "User") {
        let random = Math.floor(Math.random() * 3);
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
          } //else {
          //   this.state.tryAgain(object);
          // }
        });
        // }
      }
    },

    // tryAgain: object => {
    //   let teamPlayers = this.state.teamPlayers;
    //   let random = Math.floor(Math.random() * 10);
    //   // this.state.playerValidation(teamPlayers[random]);
    //   console.log("trying agin");
    //   if (!this.state.selectedPlayers.includes(teamPlayers[random])) {
    //     console.log(random);
    //     console.log(teamPlayers[random]);
    //     this.state.selectedPlayers.push(teamPlayers[random]);
    //     object.team.push(teamPlayers[random]);
    //     console.log(object.team);
    //     teamPlayers.splice(random, 1);
    //   } else {
    //     this.state.tryAgain();
    //   }
    // },

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

    userPrompt: () => {},

    playerTeamJoin: ({ name, position, team, rank }) => {
      console.log(name);
      console.log(position);
      console.log(team);
      console.log(rank);
      // console.log(event.target)
      // // let userTeam = this.state.userTeam;
      // console.log(this.state.teamPlayers.slice(0, 10));
      // console.log(event.target);
      // console.log(event.target.id);
      // console.log(event.target.selected);
      // console.log(event.target.name);

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
    },

    save: teamData => {
      API.saveTeam(teamData)
        .then(res => console.log("team saved " + res))
        .catch(err => console.log(err));
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
            team={order.team}
          />
        ))}
        <ShuffleButton picker={this.state.picker} />
        {/* <SaveButton saveButton={this.state.save(this.state.playerOrder.team)} /> */}
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
