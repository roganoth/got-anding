import React from "react";
import Button from "@material-ui/core/Button";

function ShuffleButton(props) {
  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={() => props.picker()}
    >
      Launch Draft!
    </Button>
  );
}

export default ShuffleButton;
