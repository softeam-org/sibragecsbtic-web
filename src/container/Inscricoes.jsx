import React, {useEffect, useRef} from "react";
import { useLocation } from "react-router-dom";
import Instructions from "../components/Instructions";
import Prices from "../components/Prices";
import Courses from "../components/Courses";
import Container from "../components/Container";

import { subscribeInstructions } from "../constants";
import SectionTitle from "../components/SectionTitle";
import { Link } from "react-router-dom";
import Construction from "../components/Construction";

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
    <div name="sobre" id='sobre' ref={sobreRef} className="bg-white">
      <Container color="nord6">
        <SectionTitle title={"Inscrições"} />
        <div className="w-100 flex justify-center mb-10 mt-8">
          <h3 className=" text-nord1 text-2xl font-bold">Como se inscrever</h3>
        </div>
        <Instructions data={subscribeInstructions} />
        <div id="precos" ref={preocosRef}><Prices /></div>
        <div className="flex flex-col w-100 justify-center items-center gap-6">
          <p className="text-nord-0 text-xl font-bold">
            Clique no botão para se inscrever no evento
          </p>
          <Link to="/" rel="noreferrer">
            <button className="bg-orange-500 border-0 text-white font-bold py-3 px-16  shadow-md hover:shadow-lg rounded-md hover:bg-orange-400 transition-all ease-in">
              Inscreva-se
            </button>
          </Link>
        </div>
      </Container>
      <div id="minicursos" ref={minicursoRef}><Courses /></div>
      
    </div>
  );
}

export default Inscricoes;
