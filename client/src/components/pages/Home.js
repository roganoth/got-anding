import React, { Component } from "react";
// import fire from "../../Fire";
import Draft from "../pages/Draft";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col } from "react-bootstrap";
import ButtonAppBar from "../navbar/index";

class Home extends Component {
  render() {
    return (
      <div>
        <ButtonAppBar />
        <Col md={10}>
          <Draft />
        </Col>
      </div>
    );
  }
}
export default Home;
