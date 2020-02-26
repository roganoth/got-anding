import React, { Component } from "react";
// import "./App.css";
// import teams from "./teams.json";
import PlayerCard from "./components/PlayerCard";
import ShuffleButton from "./components/ShuffleButton";
import Wrapper from "./components/Wrapper";
import fire from "./Fire";
import Login from "./Login";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    fire.auth().onAuthStateChanged(user => {
      // console.log(user);
      if (user) {
        this.setState({ user });
        // localStorage.removeItem ('user, user.uid');
      } else {
        // localStorage.removeItem("user");
        this.setState({ user: null });
      }
    });
  }

  state = {
    user: {},
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
    }
  };

  render() {
    return (
      <Wrapper>
        <div className="App">{this.state.user ? <Home /> : <Login />}</div>
        {this.state.playerOrder.map(order => (
          <PlayerCard
            playerNumber={order.playerNumber}
            orderNumber={order.orderNumber}
          />
        ))}
        <ShuffleButton picker={this.state.picker} />
      </Wrapper>
    );
  }
}

export default App;
