import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Calendar from "../components/Calendar";
import Container from "../components/Container";
import { IoIosArrowForward } from "react-icons/io";
import { thematicsSibragec, thematicsSbtic } from "../constants";
import SectionTitle from "../components/SectionTitle";
import { Link } from "react-router-dom";
import { AiOutlineDownload } from "react-icons/ai";

function Submissoes() {
  const location = useLocation();
  const artigosRef = useRef(null);
  const calendarioRef = useRef(null);
  const tematicaRef = useRef(null);
  const [ativo, setAtivo] = useState(false);

  function clicarDescricao() {
    setAtivo(!ativo);
  }

  useEffect(() => {
    if (location.hash === "#artigos") {
      artigosRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (location.hash === "#calendario") {
      calendarioRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (location.hash === "#tematica") {
      tematicaRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash]);
  return (
    <div
      name="artigos"
      id="artigos"
      ref={artigosRef}
      className="bg-white  text-nord0"
    >
      <Container color="white">
        <div className="flex flex-col py-8 font-semibold text-lg gap-6">
          <p className="text-center text-xl font-semibold mb-5">
            Prezados autores do SIBRAGEC-SBTIC 2023, nosso evento se aproxima e
            aguardamos encontrá-los em Aracaju!
          </p>
          <div>
            <div
              className={`h-16 md:h-12 items-center flex border text-md border-black ${
                ativo ? "rounded-t-md border-b-transparent" : "rounded-md"
              }`}
            >
              <button className={`botaoCollapse`} onClick={clicarDescricao}>
                <IoIosArrowForward
                  className={`ml-2 md:ml-4 mr-2 transition-transform ${
                    ativo ? "transform rotate-90" : ""
                  }`}
                />{" "}
                Informações sobre as apresentações orais
              </button>
            </div>
            <br />
            <p>
              Acesse aqui o horário das apresentações de artigos por sessão.{" "}
              <a
                className="text-orange-500 text-underline"
                target="_blank"
                href="https://drive.google.com/drive/folders/1QcNHF4LJqFZbF9O0S6uEPGjzNGcUoG3h?usp=sharing"
              >
                Link
              </a>
            </p>
            <br />
            {ativo && (
              <div className="border text-md lg:text-lg border-black rounded-b-md px-6 pt-2 pb-4">
                <p>
                  A duração da apresentação oral de cada trabalho será de 7
                  minutos.
                </p>
                <p>
                  A apresentação se dará em formato de slides, devendo ser
                  construída respeitando o template disponível em{" "}
                  <a
                    href="https://docs.google.com/presentation/d/1e_BV11SSBUwHFdb0NqxbefLDS0Kw97DF/edit#slide=id.p1"
                    className="text-orange-500 text-underline"
                    target="_blank"
                  >
                    TEMPLATE DA APRESENTAÇÃO
                  </a>
                  .
                </p>
                <p>
                  Para os artigos aprovados para a Edição Especial da Revista
                  Ambiente Construído, o tempo de apresentação será de 15
                  minutos e deverá ser usado o mesmo template do evento.
                </p>
                <p>
                  Pedimos que seja rapidamente respondido{" "}
                  <a
                    href="https://forms.gle/UfE3xuuMDZEJhC3C9"
                    className="text-orange-500 text-underline"
                    target="_blank"
                  >
                    este FORMULÁRIO{" "}
                  </a>
                  , para termos um controle de quais trabalhos serão ou não
                  apresentados oralmente no evento. Estamos considerando como
                  apresentador de cada trabalho o autor cuja inscrição do artigo
                  foi vinculada. Caso haja a indicação de outro apresentador,
                  favor informar também no preenchimento do formulário. O
                  preenchimento do formulário é importante tanto para a gestão
                  do evento, quanto para a emissão dos certificados de
                  apresentação.
                </p>
                <p>
                  Acompanhe as informações das Sessões de Apresentação, com a
                  distribuição dos artigos e horários, também por e-mail (para
                  os autores) e em nosso Instagram{" "}
                  <a
                    href="https://www.instagram.com/sibragec.sbtic2023"
                    className="text-orange-500 text-underline"
                    target="_blank"
                  >
                    @sibragec.sbtic2023{" "}
                  </a>
                  .
                </p>
                <p>
                  Enviar o arquivo da apresentação em PDF para o e-mail do
                  evento{" "}
                  <a
                    className="text-orange-500 text-underline"
                    href="mailto:sibragec.sbtic2023@gmail.com"
                  >
                    sibragec.sbtic2023@gmail.com
                  </a>
                </p>
              </div>
            )}
          </div>
          <div className="text-center">
            <p className="text-xl font-semibold mb-5">CANAIS DO EVENTO</p>
            <p>
              Os canais do Evento, tanto do SBTIC como do SIBRAGEC está
              disponível em{" "}
              <a
                className="text-orange-500 text-underline"
                href="https://eventos.antac.org.br/"
                target="_blank"
              >
                https://eventos.antac.org.br/
              </a>
            </p>
          </div>
        </div>
        <SectionTitle title={"Artigos Compactos"} />

        <div className="flex flex-col py-10 font-semibold text-lg">
          <p>
            Os artigos compactos (short papers) serão avaliados pelos membros do
            Comitê Científico quanto ao enquadramento às áreas do evento, à
            relevância científica, à adequação do método de pesquisa e à
            qualidade da redação.
            <br />
            Há dois templates de artigos com as diretrizes gerais para
            submissão: um relativo aos anais do SIBRAGEC e outro aos anais do
            SBTIC. Ambos estão disponíveis abaixo.
            <br />
            <br />
            Em caso de dúvidas, entre em contato com nossa equipe pelo email:{" "}
            <a
              className="text-orange-500 text-underline"
              href="mailto:sibragec.sbtic2023@gmail.com"
            >
              sibragec.sbtic2023@gmail.com
            </a>
            .
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-around gap-4 ">
          <a
            href="https://drive.google.com/uc?export=download&id=1T74RNmzmdedXrLidsp5QRMsyIYH79aEN"
            className="bg-orange-500 border-0 text-white font-bold py-3 px-8  shadow-md hover:shadow-lg rounded-md hover:bg-orange-400 transition-all ease-in flex justify-center items-center gap-4"
            download
          >
            <AiOutlineDownload size={24} />
            Template SBTIC 2023
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=1153WrVlndy6hXtVVUwv_D0GYxi6mDp2z"
            className="bg-orange-500 border-0 text-white font-bold py-3 px-8  shadow-md hover:shadow-lg rounded-md hover:bg-orange-400 transition-all ease-in flex justify-center items-center gap-4"
            download
          >
            <AiOutlineDownload size={24} />
            Template SIBRAGEC 2023
          </a>
        </div>
        <div id="calendario" ref={calendarioRef} className="calendario mb-20">
          <SectionTitle title={"Calendário"} />

          <h2 className="text-xl py-2 text-center font-semibold">
            <span className="text-red-500">ATENÇÃO! &nbsp;</span>
            Prorrogado o prazo de submissão para artigos compactos. Confira as
            novas datas abaixo.
          </h2>
          <Calendar />
        </div>

        <div id="tematica" ref={tematicaRef}>
          <SectionTitle name="tematicas" title={"Temáticas dos Artigos"} />
        </div>
        <div>
          <p className="text-nord-0 text-lg font-semibold w-full">
            Aqui os autores podem conferir as linhas temáticas para submissão de
            artigos para o SIBRAGEC e para o SBTIC. Deve-se analisar de acordo
            com a temática escolhida, em qual evento o trabalho se encaixa, para
            que se possa utilizar o template específico de cada evento.
            <br />
            Outras informações estão disponibilizadas neste site, bem como nas
            mídias sociais do evento.
            <br />
            <br />
            Consulte as linhas temáticas para submissão dos artigos logo abaixo.
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
      <Container color="nord6" name="instructions">
        <div className="w-100 flex justify-center mb-10 mt-8">
          <h3 className="text-center text-nord1 text-2xl font-bold">
            COMO CARREGAR O ARQUIVO DO ARTIGO NO NOVO SISTEMA
          </h3>
        </div>
        <div className="flex flex-col items-center text-center gap-10 mb-10">
          <p className="text-nord-0 text-lg font-semibold w-full">
            Você pode conferir o passo a passo para submissão do artigo
            acessando o botão abaixo:
          </p>
          <div className="flex justify-center">
            <a
              href="https://drive.google.com/uc?export=download&id=1QZVAZ6l4K6tWt01ZdJIDuzR9it-wySSt"
              className="bg-orange-500 border-0 text-white font-bold py-3 px-8  shadow-md hover:shadow-lg rounded-md hover:bg-orange-400 transition-all ease-in flex justify-center items-center gap-4"
              download
            >
              <AiOutlineDownload size={24} />
              Guia de Submissão
            </a>
          </div>
        </div>
        {/*
        <Instructions data={articleInstructions} />
        */}
        <div className="flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_q8H9q9arzo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </Container>
      <Container color="nord7" name="magazine">
        <div className="w-100 flex justify-center mb-10 mt-8">
          <h3 className="text-center text-nord1 text-2xl font-bold">
            CHAMADA PARA EDIÇÃO ESPECIAL SOBRE GESTÃO E ECONOMIA DA CONSTRUÇÃO E
            TECNOLOGIA DA INFORMAÇÃO E COMUNICAÇÃO NA CONSTRUÇÃO
          </h3>
        </div>

        <div className="flex flex-col items-center text-left gap-10 mb-10">
          <p className="text-nord-0 text-lg font-semibold w-full">
            A Revista Ambiente Construído irá produzir em 2024 uma Edição
            Especial sobre Gestão e Economia da Construção e Tecnologia da
            Informação e Comunicação na Construção. Trata-se de mais uma ação
            articulada da Revista com os Grupos de Trabalho da ANTAC, visando
            contribuir para a melhoria da qualidade de congressos da área.
          </p>
          <p className="text-nord-0 text-lg font-semibold w-full">
            Os artigos aceitos para publicação nesta edição da Revista poderão
            ser apresentados em Sessão Técnica Especial no SIBRAGEC+SBTIC 2023 a
            se realizar em Aracaju, Sergipe, Brasil, de 08 a 10 de novembro de
            2023. Poderão ser submetidos artigos em português, espanhol e,
            preferencialmente, em inglês.
          </p>
          <p className="text-nord-0 text-lg font-semibold w-full">
            Todos os artigos serão avaliados segundo os procedimentos usuais da
            Revista, por três avaliadores do corpo de avaliadores da Revista, de
            acordo com o calendário a seguir:
          </p>
          <p className="text-nord-0 text-lg font-semibold w-full">
            (a) Submissão do artigo até 29.04.2023
          </p>
          <p className="text-nord-0 text-lg font-semibold w-full">
            (b) Parecer final dos editores 30.08.2023
          </p>
          <p className="text-nord-0 text-lg font-semibold w-full">
            (c) Publicação da Revista: N1 V24
          </p>
          <p className="text-nord-0 text-lg font-semibold w-full">
            Endereço para submissão:{" "}
            <a
              href="https://www.seer.ufrgs.br/index.php/ambienteconstruido/about/submissions 
            "
              className="text-orange-500 text-underline break-words"
            >
              https://www.seer.ufrgs.br/index.php/ambienteconstruido/about/submissions
            </a>
            <br />
            <br />
            Confira mais detalhes sobre a chamada aqui:{" "}
            <a
              href="https://drive.google.com/file/d/1scoIjPXHwclJ0jGaq-iovth3RzZvdO4X/view?usp=share_link"
              className="text-orange-500 text-underline"
            >
              {" "}
              Link
            </a>
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Submissoes;
