import React from "react";
import "./style.css";

function PlayerCard(props) {
  return (
    <div
      className="card"
      id="cardHolder"
      onClick={props.dataChecker}
      name={props.name}
      team={props.team}
      position={props.position}
      rank={props.rank}
    >
      <div className="container">
        <h1>{props.name}</h1>
        <h2>Order to Pick: {props.orderNumber}</h2>
        <p>{props.team.name}</p>
      </div>
    </div>
  );
}

export default PlayerCard;
