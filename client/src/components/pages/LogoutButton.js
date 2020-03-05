import React, { Component } from "react";
import fire from "../../Fire";
// import Draft from "../pages/Draft";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@material-ui/core/Button";

class LogoutButton extends Component {
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
      </div>
    );
  }
}
export default LogoutButton;
