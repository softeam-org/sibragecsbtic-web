import React from "react";

import Instructions from "../components/Instructions";
import Calendar from "../components/Calendar";
import Container from "../components/Container";

import { articleInstructions, thematics } from "../constants";
import SectionTitle from "../components/SectionTitle";

function Submissao() {
  return (
    <div className="bg-white  text-nord0">
      <Container color="nord6">
        <SectionTitle title={"Artigos"} />
        <div className="w-100 flex justify-center mb-10 mt-8">
          <h3 className=" text-nord1 text-2xl font-bold">
            COMO CARREGAR O ARQUIVO DO ARTIGO NO NOVO SISTEMA:
          </h3>
        </div>
        <Instructions data={articleInstructions} />

        <SectionTitle title={"Calendário"} />
        <Calendar />

        <SectionTitle title={"Temáticas dos Artigos"} />
        <div className="flex items-center justify-center flex-col-reverse gap-10 lg:gap-0 lg:flex-row">
          <div className="lg:px-7 tematics">
            <div className="bg-white rounded-lg p-7 w-4/5 max-h-72 flex flex-col gap-4 mx-auto overflow-y-scroll ">
              {thematics.map((thematic, index) => (
                <div className="px-10 bg-zinc-50 rounded-lg flex items-center justify-center">
                  <a className="text-center py-2">{thematic.title}</a>
                </div>
              ))}
            </div>
          </div>
          <p className="text-nord-0 text-lg font-semibold max-w-lg">
            As diretrizes gerais para submissão do artigo compacto estão
            disponibilizadas no arquivo de modelo para publicação no SIBRAGEC. A
            mesma contempla informações tanto do resumo a ser submetido (nesta
            primeira etapa em português) como do artigo compacto propriamente
            dito.
            <br />
            Consulte as temáticas de submissão de artigos em {" "}
            <a href="">Políticas das Modalidades.</a>
            <br />
            Contamos com sua participação. Esse é o principal evento acadêmico
            de Gestão e Economia da Construção do Brasil!
            <br />
            Outras informações estão disponibilizadas neste site, bem como nas
            mídias sociais do evento.
            <br />
            Para dúvidas em relação à submissão dos artigos, por favor, entre em
            contato com o Comitê Científico pelo e-mail:{" "}
            <a href="">gt.gestao@antac.org.br.</a>
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Submissao;
