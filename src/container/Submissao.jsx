import React from 'react'

import Instructions from "../components/Instructions";
import { articleInstructions } from "../constants";


function Submissao() {
  return (
    <div className="bg-white">
      <div className="w-100 bg-nord6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 py-4 border-b-2 border-b-nord2 text-nord1 text-3xl font-bold">
            <h2>Artigos</h2>
          </div>
          <div className="w-100 flex justify-center mb-10 mt-8">
        <h3 className=" text-nord1 text-2xl font-bold">COMO CARREGAR O ARQUIVO DO ARTIGO NO NOVO SISTEMA:</h3>
      </div>
          <Instructions data={articleInstructions} />

          <div className="mb-6 mt-28 py-4 border-b-2 border-b-nord2 text-nord1 text-3xl font-bold">
            <h2>Calendário</h2>
          </div>
          <div className="mb-6 py-4 border-b-2 border-b-nord2 text-nord1 text-3xl font-bold">
            <h2>Temáticas dos Artigos</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Submissao