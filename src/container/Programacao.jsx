import React from "react";
import Schedule from "../components/Schedule";
import Speakers from "../components/Speakers";

function Programacao() {

  const [dia, setDia] = React.useState(1);

  return (
    <div className="bg-white text-nord0 pb-10">
      <div className="bg-nord6">
        <div className="py-20 flex flex-col items-center">
          <div className="flex justify-center gap-20 z-10">
            <div 
              className="flex items-center justify-center w-16 h-16 rounded-full bg-nord0 text-white hover:cursor-pointer"
              onClick={() => setDia(1)}
              >
              <p className="font-bold">Dia 1</p>
            </div>
            <div 
              className={`${dia >= 2 ? "bg-nord0" : "bg-zinc-300"} flex items-center justify-center w-16 h-16 rounded-full text-white hover:cursor-pointer transition-all ease-in`}
              onClick={() => setDia(2)}
            >
              <p className="font-bold">Dia 2</p>
            </div>
            <div 
              className={`${dia >= 3 ? "bg-nord0" : "bg-zinc-300"} flex items-center justify-center w-16 h-16 rounded-full text-white hover:cursor-pointer transition-all ease-in`}
              onClick={() => setDia(3)}
            >
              <p className="font-bold">Dia 3</p>
            </div>
          </div>
          <div className="flex w-1/5">
            <div className={`${dia >= 2 ? "bg-nord0" : "bg-zinc-300"} w-2/4 h-1 relative bottom-8 z-0`} />
            <div className={`${dia >= 3 ? "bg-nord0" : "bg-zinc-300"} w-2/4 h-1 relative bottom-8 z-0`} />
          </div>
        </div>
      <Schedule day={dia} />
      </div>
      <Speakers day={dia} />
    </div>
  );
}

export default Programacao;
