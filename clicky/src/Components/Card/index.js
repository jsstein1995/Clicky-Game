import React from "react";
import "./card.css";

const Card = props => (
    <div className="card img-container hover" onClick={() => props.clickCount(props.id)}>
        <img alt={props.name} src={props.image} id={props.id} className="cardImg"/>
    </div>

);

export default Card;