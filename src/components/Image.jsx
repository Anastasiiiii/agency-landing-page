import React from "react";
import "../styles/Image.css";

const Image = ({ header, text, bgImage }) => {
    return (
        <div
            className="text-container"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <h1>{header}</h1>
            <p>{text}</p>    
        </div>
    );
};

export default Image;
