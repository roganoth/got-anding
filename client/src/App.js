import React, { Component, Fragment } from "react";
// import Draft from "./components/pages/Draft";
// import "./App.css";
// import teams from "./teams.json";w
import Wrapper from "./components/Wrapper";
import fire from "./Fire";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
// import LogoutButton from "../src/components/pages/LogoutButton";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonAppBar2 from "../src/components/navbar2/navbar2";
import ModalExample from "../src/components/Modal/modal";
// import MenuAppBar from "./components/Navbar/index";
// import { Button } from "reactstrap";

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
    user: {}
  };

  render() {
    return (
      <Wrapper>
        <div>
          <Fragment>
            <ButtonAppBar2 />
          </Fragment>
        </div>
        <br></br>
        <div className="App">{this.state.user ? <Home /> : <Login />}</div>
        <ModalExample />
      </Wrapper>
    );
  }
}
export default App;
