import React from "react";
import "../styles/Menu.css";
import "../styles/Formulas.css";

const Menu = () => {
    return (
        <div className="menu-line">
            <p id="header-title">sunnyside</p>
            <ul>
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
                <li id="contact-button">CONTACT</li>
            </ul>
        </div>)
}

export default Menu;