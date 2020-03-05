import React from "react";
import { Col, Table } from "reactstrap";
import "./style.css";

function Headlines(props) {
  const headlines = props.currentHeadlines;

  const obj = headlines[0];
  let title = "";
  let link = "";
  
  
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
            {createTableData(headlines)}
          </tbody>
        </Table>
      </Col>
    </div>
  );
}

function createTableData(headlines){
  let items = [];
  let title,link = "";
  for(let i =0 ;i<5;i++) {
    if (null != headlines[i]) {
      title = JSON.parse(headlines[i]).title;
      link = JSON.parse(headlines[i]).url + JSON.parse(headlines[i]).link;
    }
    items.push(<tr><a href={link} target="_blank">{title}</a></tr>);
  }
  return items;
}
export default Headlines;
