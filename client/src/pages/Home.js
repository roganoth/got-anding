import React, { Component, useState } from "react";
import fire from "../components/Firebase";
import Draft from "./Draft";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Headlines from "../components/Headlines";
import TeamSelect from "../components/TeamSelect/index";
import data from "../teams.json";
import { Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import headlineApi from "../utils/HeadlineCall";

class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      teams: data,
      headlines: []
    };
  }

  logout() {
    fire.auth().signOut();
  }

  handleClick = event => {
    // const headline1 = headlineApi.getHeadlines(event.currentTarget.value);

    // alert(headline1);

    // this.setState({
    //   headlines: headlineApi.getHeadlines(event.currentTarget.value)
    // });
    headlineApi
      .getHeadlines(event.currentTarget.value)
      .then(res => {
        this.setState({ headlines: res.map(JSON.stringify) });
      })
      .catch(err => console.log(err));
  };

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  createDropDown() {
    let items = [];
    for (let i = 0; i < this.state.teams.length; i++) {
      items.push(
        <TeamSelect
          team={this.state.teams[i].team}
          value={this.state.teams[i].url}
          handleClick={this.handleClick}
        />
      );
    }
    return items;
  }

  render() {
    return (
      <div>
        <Button color="inherit" onClick={this.logout}>
          Logout
        </Button>
        <br></br>
        <Dropdown
          className="btn btn-primary float-right"
          isOpen={this.state.dropdownOpen}
          sz="lg"
          toggle={this.toggle}
        >
          <DropdownToggle className="btn btn-primary">
            Favorite Team
          </DropdownToggle>
          <DropdownMenu>{this.createDropDown()}</DropdownMenu>
        </Dropdown>

        <Headlines currentHeadlines={this.state.headlines} />
        <Draft />
      </div>
    );
  }
}
export default Home;
