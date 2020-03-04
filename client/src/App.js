import React, { Component, Fragment } from "react";
import Draft from "./pages/Draft";
// import "./App.css";
// import teams from "./teams.json";w
import Wrapper from "./components/Wrapper";
import fire from "./Fire";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuAppBar from "./components/navbar/index";
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
          <MenuAppBar></MenuAppBar>
          <Fragment>
            <Draft />
          </Fragment>
        </div>
        <div className="App">{this.state.user ? <Home /> : <Login />}</div>
      </Wrapper>
    );
  }
}
export default App;
