import React from "react";

import { subscribeInstructions } from "../constants";

function Instructions({ data }) {
  return (
    <>


      <div className="subcription-grid  text-nord0 grid  grid-flow-col ">
        {data.map((instruction, index) => (
          <div
            className={`flex items-start p-6 max-w-xl gap-4  ${
              index === 1 ? "" : ""
            }`}
            key={index}
          >
            <h2 className="mt-1 px-6 py-4 font-bold text-2xl text-white bg-nord0">
              {index + 1}
            </h2>
            <div>
              <h2 className=" text-lg mb-8">{instruction.title}</h2>
              {typeof instruction.text === "string" ? (
                <p className="text-lg">{instruction.text}</p>
              ) : (
                instruction.text.map((text, index) => (
                  <p className="text-lg" key={index}>
                    {text}
                  </p>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Instructions;
