import React, { Component, Fragment } from "react";
import Draft from "./components/pages/Draft";
// import "./App.css";
// import teams from "./teams.json";w
import Wrapper from "./components/Wrapper";
import fire from "./Fire";
import Login from "./Login";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuAppBar from "./components/Navbar/index";
import BackToTop from "./components/NflPlayers/index";

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
            <MenuAppBar />
            <BackToTop />
            <Draft />
          </Fragment>
        </div>
        <div className="App">{this.state.user ? <Home /> : <Login />}</div>
      </Wrapper>
    );
  }
}
export default App;
