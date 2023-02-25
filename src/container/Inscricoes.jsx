import React from "react";

import Instructions from "../components/Instructions";
import Prices from "../components/Prices";
import Courses from "../components/Courses";

function Inscricoes() {
  return (
    <div className="bg-white">
      <div className="w-100 bg-nord6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 py-4 border-b-2 border-b-nord2 text-nord1 text-3xl font-bold">
            <h2>Inscrições</h2>
          </div>

          <Instructions />

          <Prices />
          <div className="flex flex-col w-100 justify-center items-center gap-6">
            <p className="text-nord-0 text-xl font-bold">
              Clique no botão para se inscrever no evento
            </p>
            <a href="/" rel="noreferrer">
              <button className="bg-orange-500 border-0 text-white font-bold py-3 px-16  shadow-md hover:shadow-lg rounded-md hover:bg-orange-400 transition-all ease-in">
                Inscreva-se
              </button>
            </a>
          </div>
        </div>
      </div>
          <Courses />
    </div>
  );
}

export default Inscricoes;
