import React from "react";

function ShuffleButton(props) {
  return <button onClick={() => props.picker()}>Launch Draft!</button>;
}

export default ShuffleButton;
