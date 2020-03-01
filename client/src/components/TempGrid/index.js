import React from "react";

function TempGrid(props) {
  return (
    <div>
      <p>____________________</p>
      <p>
        {props.name} | {props.position} | {props.team} | {props.rank}
      </p>
      <button onClick={() => props.choose()} selected={props.selected} id="teamButton">Add to your Team</button>
    </div>
  );
}

export default TempGrid;
