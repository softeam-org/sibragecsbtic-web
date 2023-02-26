import React from "react";

import Instructions from "../components/Instructions";
import { articleInstructions, thematics } from "../constants";
import Calendar from "../components/Calendar";

function Submissao() {
  return (
    <div className="bg-white">
      <div className="w-100 bg-nord6 py-20 text-nord0">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 py-4 border-b-2 border-b-nord2 text-nord1 text-3xl font-bold">
            <h2>Artigos</h2>
          </div>
          <div className="w-100 flex justify-center mb-10 mt-8">
            <h3 className=" text-nord1 text-2xl font-bold">
              COMO CARREGAR O ARQUIVO DO ARTIGO NO NOVO SISTEMA:
            </h3>
          </div>
          <Instructions data={articleInstructions} />

          <div className="mb-36 mt-28 py-4 border-b-2 border-b-nord2 text-nord1 text-3xl font-bold">
            <h2>Calendário</h2>
          </div>
          <Calendar />

          <div className="mb-6 mt-36 py-4 border-b-2 border-b-nord2 text-nord1 text-3xl font-bold">
            <h2>Temáticas dos Artigos</h2>
          </div>
          <div className="flex items-center justify-around">
            <div className="px-7 tematics">
              <div className="bg-white rounded-lg p-7 w-4/5 max-h-72 flex flex-col gap-4 items-center overflow-y-scroll ">

              {thematics.map((thematic, index) => (
                <div className="px-10 bg-zinc-50 rounded-lg flex items-center justify-center">
                  <a className="text-center">{thematic.title}</a>
                </div>
              ))}
              </div>
            </div>
            <p className="text-nord-0 text-lg font-semibold max-w-lg">
              As diretrizes gerais para submissão do artigo compacto estão
              disponibilizadas no arquivo de modelo para publicação no SIBRAGEC.
              A mesma contempla informações tanto do resumo a ser submetido
              (nesta primeira etapa em português) como do artigo compacto
              propriamente dito. 
              <br />
              Consulte as temáticas de submissão de artigos
              em <a href="">Políticas das Modalidades</a>  
              <br />
              Contamos com sua participação. Esse é
              o principal evento acadêmico de Gestão e Economia da Construção do
              Brasil! 
              <br />
              Outras informações estão disponibilizadas neste site, bem
              como nas mídias sociais do evento. 
              <br />
              Para dúvidas em relação a
              submissão dos artigos, por favor, entre em contato com o Comitê
              Científico pelo email: <a href="">gt.gestao@antac.org.br</a> 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Submissao;
