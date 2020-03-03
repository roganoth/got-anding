import React from "react";
// import "./index.css"

function renderResultRows(props) {
  return (
    <table className="table">
      <tbody>
        <tr key={props.name} onClick={props.choose}>
          <td selected={props.selected} name={props.name} id={props.id} position={props.position} team={props.team} rank={props.rank}>{props.name}</td>
          <td selected={props.selected} name={props.name} id={props.id} position={props.position} team={props.team} rank={props.rank}>{props.position}</td>
          <td selected={props.selected} name={props.name} id={props.id} position={props.position} team={props.team} rank={props.rank}>{props.team}</td>
          <td selected={props.selected} name={props.name} id={props.id} position={props.position} team={props.team} rank={props.rank}>{props.rank}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default renderResultRows;