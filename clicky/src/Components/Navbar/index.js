import React from "react";
import "./nav.css"
function Nav(props) {
    return(
        <nav className="navbar navbar-expand-lg ">
            <ul>
                <li className="brand"><a href="/">Muggle Memory</a></li>
                <li className="navMessage">{props.message}</li>
                <li className="navScore">
                    Score: {props.scr} | Top Score: {props.highscr}
                </li>
            </ul>
        </nav>
    )
}

export default Nav;