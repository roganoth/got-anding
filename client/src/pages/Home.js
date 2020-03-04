import React, { Component } from "react";
<<<<<<< HEAD:client/src/pages/Home.js
import fire from "./../components/Firebase";
=======
import fire from "../../Fire";
import Draft from "../pages/Draft";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
>>>>>>> master:client/src/components/pages/Home.js

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

        <Draft />
      </div>
    );
  }
}
export default Home;
