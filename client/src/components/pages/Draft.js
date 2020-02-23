import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";

class Draft extends Component {
  state = {
    players: []
  };

  componentDidMount() {
    this.loadPlayers();
  }

  loadPlayers = () => {
    API.getPlayers()
      .then(res => this.setState({ players: res.data }))
      .catch(err => console.log(err));
  };

  render() {
      return (

      )
  }
}

export default Draft;
