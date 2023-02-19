import React from "react";

function Card({image,name,description}){
    return(
        <div>
            <img src={image} alt="" srcset="" />
            <h3>{name}</h3>
            <h3>{description}</h3>
        </div>
    )
}

export default Card;