import React from "react";
import "../styles/Header.css";
import Menu from "./Menu";

const Header = () => {
    const arrowDownIcon = (
        <svg width="36" height="114" xmlns="http://www.w3.org/2000/svg">
            <g stroke="#FFF" strokeWidth="6" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 3v100M3 95.484l15 15 15-15" />
            </g>
        </svg>
    );

    return (
        <div className="header-container">
            <Menu />
            <div className="header-main-text">
                <p>We are creatives</p>
                <span id="arrow-down-icon">{arrowDownIcon}</span>
            </div>
        </div>
    );
};

export default Header;
