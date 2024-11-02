import React from "react";
import milkImg from "../images/desktop/image-gallery-milkbottles.jpg";
import orangeImg from "../images/desktop/image-gallery-orange.jpg";
import coneImg from "../images/desktop/image-gallery-cone.jpg";
import sugarImg from "../images/desktop/image-gallery-sugarcubes.jpg";

const ImgLine = () => {
    
    const imagesData = [milkImg, orangeImg, coneImg, sugarImg];

    return(
        <div className="images-in-line">
            {imagesData.map((data, index) => (
                <img key={index} src={data} className="line-img" alt="gallery item" style={{width: "25%"}} />
            ))}
            
        </div>
    )
}

export default ImgLine;
