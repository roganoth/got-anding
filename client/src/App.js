import React from "react";
import "./App.css";
import teams from "./teams.json";
import PlayerCard from "./components/PlayerCard";
import ShuffleButton from "./components/ShuffleButton";


class App extends Component {
  state = {
    players =[1, 2, 3, 4, 5, 6],
    playerOrder =[
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

    picker = () => {
      for (let i = 0; i < players.length; i++) {
        let j = Math.floor(Math.random() * i + 1);
        [players[i], players[j]] = [players[j], players[i]];
      };
      for (let i = 0; i < playerOrder.length; i++) {
        playerOrder[i].orderNumber = players[i];
      }
      console.log(playerOrder);
      playerOrder.sort((a, b) => a.orderNumber - b.orderNumber);
      console.log("----------------------------------------------------");
      console.log(playerOrder);
    }

  }

  render() {
    return (
      <Wrapper>
        {this.state.playerOrder.map(order => (
          <PlayerCard
            playerNumber={order.orderNumber}
            orderNumber={order.orderNumber}
          />
        ))}
        <ShuffleButton
          picker={this.state.picker}
        />
      </Wrapper>
    )
  }
}

export default App;
