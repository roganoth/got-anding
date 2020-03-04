import React, { Component, Fragment } from "react";
// import Draft from "./components/pages/Draft";
// import "./App.css";
// import teams from "./teams.json";w
import Wrapper from "./components/Wrapper";
import fire from "./Fire";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
import MenuAppBar from "./components/Navbar";
=======
import ButtonAppBar2 from "../src/components/navbar2/navbar2";
// import MenuAppBar from "./components/Navbar/index";
>>>>>>> f7566a3c2d9d5a281411e64d38f64aae05858576
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
            <ButtonAppBar2 />
          </Fragment>
        </div>
        <br></br>
        <div className="App">{this.state.user ? <Home /> : <Login />}</div>
      </Wrapper>
    );
  }
}
export default App;
