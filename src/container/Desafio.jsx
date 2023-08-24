import React from 'react'
import SectionTitle from '../components/SectionTitle'
import Container from '../components/Container'
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

function Desafio() {
    const location = useLocation();
    const infoRef = useRef(null);

    useEffect(() => {
        if (location.hash === "#info") {
            infoRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location.hash]);
    return (
        <Container color="nord6">

            <div id='info' ref={infoRef} className='text-nord1 text-md font-semibold pt-2 text-lg'>
                <SectionTitle title={"Desafio SIBRAGEC+SBTIC"} />

                <div className="w-100 flex flex-col items-center justify-center">
                    <p className=" text-nord1 text-md font-semibold">O II Desafio SIBRAGEC+SBTIC para Estudantes é uma iniciativa desenvolvida pelo Grupo de Trabalho de Gestão e Economia da Construção (GT GEC) e de Tecnologia da Informação e Comunicação (GT TIC) da Associação Nacional de Tecnologia do Ambiente Construído (ANTAC). Trata-se de um desafio de ideias no qual equipes de até 4 estudantes competem entre si para desenvolverem, em curto período, uma ideia inovadora para um determinado desafio real.</p>
                </div>
                <br />
                <div>
                    <p> Uma empresa sergipana, Impacto Construções lança o desafio, a partir da observação da realidade, tendo as equipes a oportunidade de pensar colaborativamente em soluções inovadoras que possam ser implementadas pelas empresas.
                    </p>
                </div>
                <br />
                <div>
                    <p>O edital segue no link abaixo, onde os interessados terão acesso às datas importantes e mais informações sobre a atividade. Monte sua equipe e participe deste desafio!
                    </p>
                </div>
                <br />
                <div>
                    <br />

                    <p>
                        A submissão deverá ser realizada exclusivamente por e-mail.

                    </p>
                    <div className='flex justify-center mt-8'>
                        <a
                            href="https://drive.google.com/file/d/18EEvo8blMj-bY6QoyXtAuArhbkc_hHE2/view?usp=drive_link"
                            target='_blank'
                        >
                            <button className="bg-orange-500 border-0 text-white font-bold text-md shadow-md hover:shadow-lg rounded-md hover:bg-orange-400">
                                Edital 2023
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </Container>

    )
}

export default Desafio