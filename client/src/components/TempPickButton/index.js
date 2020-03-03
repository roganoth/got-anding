import React from "react";

function PickButton(props){
    return (
        <button onClick={event => props.choose}>Add Player to Team</button>
    )
}

export default PickButton;