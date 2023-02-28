import React from "react";

function Card({image,name,description,institution, key}){
    return(
        <div className="bg-white rounded-lg shadow-md text-gray-800 mx-8 mb-8 drop-shadow-md " >
            <div className="flex justify-center">
            <img className="object-cover rounded-full w-24 h-24 mt-4" src={image} alt=""></img>
            </div>

            <div className="p-4">
            <div className="flex justify-center">
            <h3 className="text-lg font-semibold font-bold">{name}</h3>
            </div>
            <p>{description}</p>
            
            <div className="flex justify-center font-bold">
            <h3>{institution}</h3>
            </div>
            
            </div>
        </div>
    )
}

export default Card;