import React from "react";
import Schedule from "../components/Schedule";
import Speakers from "../components/Speakers";
import Container from "../components/Container";

function Programacao() {

  const [dia, setDia] = React.useState(1);
  const dias = [1, 2, 3];

  return (
    <div className="bg-white text-nord0 pb-10">
      <Container color="nord6">
        <div className="py-20 flex flex-col items-center">
          <div className="flex justify-center gap-20 z-10">
            {
              dias.map((diaAtual, index) => (
                <div 
                key={diaAtual}
                className={`${diaAtual <= dia ? "bg-nord0" : "bg-zinc-300"} flex items-center justify-center w-16 h-16 rounded-full text-white hover:cursor-pointer transition-all ease-in`}
                onClick={() => setDia(diaAtual)}
                >
                <p className="font-bold">Dia {diaAtual}</p>
              </div>
            ))}
           
          </div>
          <div className="flex w-1/5">
            <div className={`${dia >= 2 ? "bg-nord0" : "bg-zinc-300"} w-2/4 h-1 relative bottom-8 z-0`} />
            <div className={`${dia >= 3 ? "bg-nord0" : "bg-zinc-300"} w-2/4 h-1 relative bottom-8 z-0`} />
          </div>
        </div>
      <Schedule day={dia} />
      </Container>
      <Speakers day={dia} />
    </div>
  );
}

export default Programacao;
