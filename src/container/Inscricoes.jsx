import React from "react";

import Instructions from "../components/Instructions";

function Inscricoes() {
  return (
    <div className="w-100 bg-nord6 pt-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 py-4 border-b-2 border-b-nord2 text-nord1 text-3xl font-bold">
          <h2>Inscrições</h2>
        </div>

        <Instructions />
      </div>
    </div>
  );
}

export default Inscricoes;
