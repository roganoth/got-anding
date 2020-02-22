import React from "react";

function ShuffleButton(props){
    return (
        <button onClick={() => props.picker()}>Let's Begin!</button>
    )
}

export default ShuffleButton;