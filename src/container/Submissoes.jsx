import React from "react";

import Instructions from "../components/Instructions";
import Calendar from "../components/Calendar";
import Container from "../components/Container";

import {
  articleInstructions,
  thematicsSibragec,
  thematicsSbtic,
} from "../constants";
import SectionTitle from "../components/SectionTitle";
import { Link } from "react-router-dom";

function Submissoes() {
  return (
    <div name="artigos" className="bg-white  text-nord0">
      <Container color="white">
        <SectionTitle title={"Artigos"} />

        <div className="flex flex-col py-10 font-semibold text-lg">
          <p>
            Os artigos compactos (short papers) serão avaliados pelos membros do
            Comitê Científico quanto ao enquadramento do assunto abordado à
            temática do evento, à relevância científica, à adequação do método
            de pesquisa e à qualidade da redação.{" "}
          </p>
          <p>
            As diretrizes gerais para submissão do artigo compacto estão
            disponibilizadas no arquivo de modelo para publicação <Link
              to={'https://drive.google.com/drive/u/0/folders/1lWCw2mAZ_QrGNLVKh-ejKu2umq3Zk1xV'} 
              className="underline cursor-pointer"
            >template</Link>.
            Em caso de dúvidas, entre em contato
            com nossa equipe pelo email: sibragec.sbtic2023@gmail.com.
          </p>
        </div>
        <div className="calendario mb-20">
          <SectionTitle title={"Calendário"} />
          <Calendar />
        </div>

        <SectionTitle name="tematicas" title={"Temáticas dos Artigos"} />
        <div>
          <p className="text-nord-0 text-lg font-semibold w-full">
            As diretrizes gerais para submissão do artigo compacto estão
            disponibilizadas no arquivo de modelo para publicação no SIBRAGEC.
            <br />
            <br />
            Consulte as linhas temáticas para submissão dos artigos logo abaixo.
            <br />
            <br />
            Contamos com sua participação. Esse é o principal evento acadêmico
            de Gestão e Economia da Construção do Brasil!
            <br />
            Outras informações estão disponibilizadas neste site, bem como nas
            mídias sociais do evento.
            <br />
            Para dúvidas em relação à submissão dos artigos, por favor, entre em
            contato com o Comitê Científico pelo e-mail:{" "}
            <Link to="">gt.gestao@antac.org.br.</Link>
          </p>

          <div className="flex flex-col gap-10 lg:flex-row mt-10">
            <div className="lg:px-7 tematics">
              <h2 className="text-xl py-2 text-center font-semibold">
                Linhas do SIBRAGEC
              </h2>
              <div className="bg-white md:mx-10 lg:mx-0 rounded-lg p-7 pt-0 max-h-72 flex flex-col gap-4 mx-auto overflow-y-scroll ">
                {thematicsSibragec.map((thematic, index) => (
                  <div className="px-10 bg-zinc-50 rounded-lg flex items-center justify-center">
                    <Link className="text-center text-xl py-2">
                      {thematic.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:px-7 tematics">
              <h2 className="text-xl py-2 text-center font-semibold">
                Linhas do SBTIC
              </h2>
              <div className="bg-white md:mx-10 lg:mx-0 rounded-lg p-7 pt-0 max-h-72 flex flex-col gap-4 mx-auto overflow-y-scroll ">
                {thematicsSbtic.map((thematic, index) => (
                  <div className="px-10 bg-zinc-50 rounded-lg flex items-center justify-center">
                    <Link className="text-center text-xl py-2">
                      {thematic.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container color="nord6">
        <div className="w-100 flex justify-center mb-10 mt-8">
          <h3 className="text-center text-nord1 text-2xl font-bold">
            COMO CARREGAR O ARQUIVO DO ARTIGO NO NOVO SISTEMA
          </h3>
        </div>
        <div className="flex flex-col items-center text-center gap-10 mb-10">
          <p className="text-nord-0 text-lg font-semibold w-full">
            Você pode conferir o passo a passo para submissão do artigo acessando o botão abaixo:
          </p>
          <div className="flex justify-center">
            <Link
              target="_blank"
              to="https://drive.google.com/file/d/1QZVAZ6l4K6tWt01ZdJIDuzR9it-wySSt/view?usp=sharing"
              className="bg-orange-500 border-0 text-white font-bold py-3 px-8  shadow-md hover:shadow-lg rounded-md hover:bg-orange-400 transition-all ease-in"
            >
              Acessar
            </Link>
        </div>
        </div>
        {/*
        <Instructions data={articleInstructions} />
        */}
        <div className="flex justify-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/_q8H9q9arzo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </Container>
    </div>
  );
}

export default Submissoes;
