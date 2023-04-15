import React from "react";

import { prices } from "../constants";

function Prices() {
  const [type, setType] = React.useState("all");

  console.log();

  const handleEventType = (type) => { // Checa o tipo de evento e seta o tipo de evento no mobile
    switch (type) {
      case "Dia da indústria":
        setType("industryDay");
        break;
     /*  case "Jantar":
        setType("Jantar"); */
        break;
      case "Minicurso":
        setType("minicourses");
        break;
      default:
        setType("all");
    }
  };
  return (
    <div name='preços' className='text-nord0 pt-4 pb-20 font-medium'>
      {/*Versão desktop */}
      <div className='hidden md:flex w-100 items-center justify-center gap-16 text-xl font-bold mb-16 text-zinc-300'>
        <div onClick={() => setType("all")}>
          <p
            className={`transition-all hover:text-nord0 hover:cursor-pointer ${
              type === "all" ? "text-nord0" : ""
            }`}
          >
            Evento
          </p>
        </div>
        <div onClick={() => setType("industryDay")}>
          <p
            className={`transition-all hover:text-nord0 hover:cursor-pointer ${
              type === "industryDay" ? "text-nord0" : ""
            }`}
          >
            Dia da indústria
          </p>
        </div>
        {/* <div onClick={() => setType("Jantar")}>
          <p
            className={`transition-all hover:text-nord0 hover:cursor-pointer ${
              type === "Jantar" ? "text-nord0" : ""
            }`}
          >
            Jantar
          </p>
          </div> */}
        <div onClick={() => setType("minicourses")}>
          <p
            className={`transition-all hover:text-nord0 hover:cursor-pointer ${
              type === "minicourses" ? "text-nord0" : ""
            }`}
          >
            Minicurso
          </p>
        </div>
      </div>

      {/*Versão mobile */}
      <div className='md:hidden'>
        <select
          id='type-select'
          className='block w-full p-2 my-6 rounded-md bg-white border-gray-300 shadow-md  focus:border-zinc-300 focus:ring focus:ring-zinc-200 focus:ring-opacity-50'
          onChange={(event) => handleEventType(event.target.value)}
        >
          <option value='Evento'>Evento</option>
          <option value='Dia da indústria'>Dia da indústria</option>
         {/*  <option value='Jantar'>Jantar</option> */}
          <option value='Minicurso'>Minicurso</option>
        </select>
      </div>

      <div className='mb-20 text-xl w-100 flex items-center justify-center text-nord0 font-bold'>
        <h2>Preço das inscrições</h2>
      </div>

      <div className='overflow-x-scroll md:overflow-x-hidden py-4'>
        <div className=' table w-full text-lg border-separate border-spacing-0'>
          <div className='table-header-group'>
            <div className='table-row'>
              <div className='table-cell'></div>
              <div className='table-cell'></div>
              <div className='table-cell text-center pb-4'>Até 15/07</div>
              <div className='table-cell text-center pb-4'>Até 15/10</div>
              <div className='table-cell text-center pb-4'>No local</div>
            </div>
          </div>
          <div className='table-row-group'>
            {prices[type]?.map((row) => {
              return (
                <div className='table-row'>
                  <div className='table-cell w-64 font-bold text-xl align-middle pr-2'>
                    {row.title}
                  </div>

                  {/*Primeira coluna */}
                  <div className='table-cell text-center'>
                    <div className='px-7 pt-4 md:py-0 lg:py-6 border border-black'>
                      Sócio ANTAC em dia
                    </div>
                    <div className='px-7 mb-2 md:py-0 lg:py-6 border border-black border-t-0'>
                      Não-sócio ANTAC
                    </div>
                  </div>

                  {/*Segunda coluna*/}
                  <div className='table-cell text-center'>
                    <div className='px-7 pt-4 pb-7 md:py-0 lg:py-6 border border-black border-l-0 border-b-0'>
                      {row.price.antac[0]}
                    </div>
                    <div className='px-7 pt-4 pb-3 md:py-0 lg:py-6 border border-black mb-4 border-l-0'>
                      {row.price.nonAntac[0]}
                    </div>
                  </div>

                  {/*Terceira coluna*/}
                  <div className='table-cell text-center'>
                    <div className='px-7 pt-4 pb-7 md:py-0 lg:py-6 border border-black border-l-0 border-b-0'>
                      {row.price.antac[1]}
                    </div>
                    <div className='px-7 pt-4 pb-3 md:py-0 lg:py-6 border border-black border-l-0'>
                      {row.price.nonAntac[1]}
                    </div>
                  </div>

                  {/*Quarta coluna*/}
                  <div className='table-cell text-center'>
                    <div className='px-7 pt-4 pb-7 md:py-0 lg:py-6 border border-black border-l-0 border-b-0'>
                      {row.price.antac[2]}
                    </div>
                    <div className='px-7 pt-4 pb-3 md:py-0 lg:py-6 border border-black border-l-0'>
                      {row.price.nonAntac[2]}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {type == "all" && (
        <div>
          <p className='text-nord1 text-lg font-semibold pt-6 pb-12'>
            A Comissão Organizadora do SIBRAGEC+SBTIC 2023 está lançando o
            pacote de inscrições em grupo, com 10% de desconto para grupos acima
            de 10 pessoas. Para mais informações, entre em contato com nossa
            equipe através do email: sibragec.sbtic2023@gmail.com .
          </p>
          <div className="flex flex-col w-100 justify-center items-center gap-6">
          <p className="text-nord-0 text-xl font-bold">
            Clique no botão para se inscrever no evento
          </p>
          <a href='https://forms.gle/g2DWkvNtLTKwdPkA9' target={"_blank"}>
            <button className="bg-orange-500 border-0 text-white font-bold py-3 px-16  shadow-md hover:shadow-lg rounded-md hover:bg-orange-400 transition-all ease-in">
              Inscreva-se
            </button>
          </a>
        </div>
        </div>
      )}
      {type == "industryDay" && (
          <div className="flex flex-col w-100 justify-center items-center gap-6 pt-6">
          <p className="text-nord-0 text-xl font-bold">
            Clique no botão para se inscrever no evento
          </p>
          <a href='https://forms.gle/g2DWkvNtLTKwdPkA9' target={"_blank"}>
            <button className="bg-orange-500 border-0 text-white font-bold py-3 px-16  shadow-md hover:shadow-lg rounded-md hover:bg-orange-400 transition-all ease-in">
              Inscreva-se
            </button>
          </a>
        </div>

      )}
    </div>
  );
}

export default Prices;
