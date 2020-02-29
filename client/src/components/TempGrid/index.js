import React from "react";

function TempGrid(props) {
  return (
    <div>
      <p>____________________</p>
      <p>
        {props.name} | {props.position} | {props.team} | {props.rank}
      </p>
      <p onClick={() => props.choose(props.event)}></p>
    </div>
  );
}

export default TempGrid;
