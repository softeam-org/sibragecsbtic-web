import React from "react";

function Card({image,name,description,institution, key}){
    return(
        <div className="bg-white rounded-lg shadow-md text-gray-800  drop-shadow-md h-60 " >
            <div className="flex justify-center">
            <img className="object-cover rounded-full w-24 h-24 mt-4" src={image} alt=""></img>
            </div>

            <div className="p-4 flex flex-col gap-3">
            <div className="flex justify-center">
            <h3 className="sm:text-lg font-bold text-center">{name}</h3>
            </div>
            {/* <p>{description}</p> */}
            
            <div className="flex justify-center font-bold">
            <h3>{institution}</h3>
            </div>
            
            </div>
        </div>
    )
}

export default Card;