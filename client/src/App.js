import React, { Component, Fragment } from "react";
// import "./App.css";
// import teams from "./teams.json";
import Draft from "./components/pages/Draft";
import MenuAppBar from "./components/navbar/index";
import BackToTop from "./components/NflPlayers/index";

function App() {
  return (
    <Fragment>
      <MenuAppBar />
      <BackToTop />
      <Draft />
    </Fragment>
  );
}
export default App;
