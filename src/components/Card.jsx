import React from "react";

function Card({image,name,description,institution, key}){
    return(
        <div className="bg-white mb-12 lg:mb-6 md:mx-4 rounded-lg shadow-sm text-gray-800 w-auto  drop-shadow-md h-64 lg:h-72" >
            <div className="flex justify-center">
            <img className="object-cover rounded-full w-24 h-24 mt-4" src={image} alt=""></img>
            </div>

            <div className="p-4 flex flex-col gap-3 ">
            <div className="flex justify-center">
            <h3 className="sm:text-lg md:text-base font-bold text-center">{name}</h3>
            </div>
            {/* <p>{description}</p> */}
            
            {/* <div className="flex justify-center font-bold">
            <h3>{institution}</h3>
            </div> */}
            <h3 className="text-slate-500 font-bold mb-6 md:mb-2 lg:mb-12 flex justify-center items-center ">{institution}</h3>
            
            </div>
            
        </div>
    )
}

export default Card;