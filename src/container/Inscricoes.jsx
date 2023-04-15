import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Instructions from "../components/Instructions";
import Prices from "../components/Prices";
import Courses from "../components/Courses";
import Container from "../components/Container";

import { subscribeInstructions } from "../constants";
import SectionTitle from "../components/SectionTitle";

function Inscricoes() {
  const location = useLocation();
  const sobreRef = useRef(null);
  const preocosRef = useRef(null);
  const minicursoRef = useRef(null);

  useEffect(() => {
    if (location.hash === "#sobre") {
      sobreRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (location.hash === "#precos") {
      preocosRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (location.hash === "#minicursos") {
      minicursoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash]);
  return (
    <div name="sobre" id="sobre" ref={sobreRef} className="bg-white">
      <Container color="nord6">
        <SectionTitle title={"Inscrições"} />
        <div className="w-100 flex flex-col items-center justify-center mb-16 mt-8">
          <h3 className=" text-nord1 text-2xl font-bold mb-3">As inscrições para o SIBRAGEC+SBTIC 2023 já estão disponíveis!</h3>
          <p className=" text-nord1 text-md font-semibold">Confira os preços das inscrições para profissionais, estudantes de pós-graduação, e estudantes de graduação para o simpósio, Industry Day e minicursos.</p>
        </div>
        <div className="w-100 flex justify-center mb-10 mt-8">
          <h3 className=" text-nord1 text-2xl font-bold">Como se inscrever</h3>
        </div>
        <Instructions data={subscribeInstructions} />
        <div id="precos" ref={preocosRef}>

          <Prices />
          
        </div>
      </Container>
      <div id="minicursos" ref={minicursoRef}>

        <Courses />

      </div>
    </div>
  );
}

export default Inscricoes;
