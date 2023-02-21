import React from "react";

function Card({image,name,description,institution, key}){
    return(
        <div className="bg-white rounded-lg shadow-md text-gray-800 px-8 mx-8" >
            <img className="w-40 h-40 object-cover rounded-full" src={image} alt=""></img>
            <div className="p-4">
            <h3 className="text-lg font-semibold">{name}</h3>
            <p>{description}</p>
            <h3>{institution}</h3>
            </div>
        </div>
    )
}

export default Card;