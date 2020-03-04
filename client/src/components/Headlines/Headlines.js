import React from "react";
import { Col, Table } from "reactstrap";
import "./style.css";

function Headlines(props) {
  return (
    <div className="headlines">
      {props.children}
      <Col md={3}>
        <Table className="float-right">
          <thead>
            <tr>
              <th>Headlines</th>
            </tr>
          </thead>
          <tbody>
            <td>Headline 1</td>
          </tbody>
        </Table>
      </Col>
    </div>
  );
}

export default Headlines;
