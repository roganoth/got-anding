import React from "react";
import "./style.css";

function PlayerCard(props){
    return (
        <div className="card">
            <div className="container">
                <h1>Player: {props.playerNumber}</h1>
                <h2>Order to Pick: {props.orderNumber}</h2>
            </div>
        </div>
    )
}

export default PlayerCard;