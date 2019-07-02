import React from "react";
import "./jumbo.css";

const Jumbo = props => {  
  return (
    <div className="Jumbotron">
      <h2 className="textbar">Click on images to earn points</h2>
      <h3 className="textbar">But click an image twice and you'll have to start again!</h3>
      <button className="btn" onClick={props.btn}>PLAY</button>
    </div>
  );
}

export default Jumbo;