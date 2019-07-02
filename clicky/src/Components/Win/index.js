import React from "react";
import "./win.css";

const Win = props => {
    return (
        <div className="win">
            <h2 className="wintext">You win</h2>
            <h3 className="wintext">Click the button to play again</h3>
            <button className="btn" onClick={props.btn}>PLAY</button>
        </div>
    );
}
export default Win;

