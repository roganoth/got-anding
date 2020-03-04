import React, { Component } from "react";
import fire from "../../Fire";
import Draft from "../pages/Draft";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Headlines from "../Headlines/Headlines";

class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div>
        <Button color="inherit" onClick={this.logout}>
          Logout
        </Button>
        <br></br>
        <Headlines />
        <Draft />
      </div>
    );
  }
}
export default Home;
