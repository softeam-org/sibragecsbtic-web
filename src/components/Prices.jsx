import React from "react";

function Prices() {




  return (
    <div className="text-nord0 pb-40 font-medium">
      <div className="flex ">
        <div>
          <p>Evento</p>
        </div>
        <div>
          <p>Dia da indústria</p>
        </div>
        <div>
          <p>Jantar</p>
        </div>
        <div>
          <p>Minicurso</p>
        </div>
      </div>

      <div className="mb-20">
        <h2>Preço das inscrições</h2>
      </div>

      <div className="table w-full text-lg border-separate border-spacing-0">
        <div className="table-header-group">
          <div className="table-row">
            <div className="table-cell"></div>
            <div className="table-cell"></div>
            <div className="table-cell text-center pb-4">Data</div>
            <div className="table-cell text-center pb-4">Data</div>
            <div className="table-cell text-center pb-4">Data</div>
          </div>
        </div>
        <div className="table-row-group">
          <div className="table-row">
            <div className="table-cell font-bold text-xl align-middle pr-2">Profissional</div>
            <div className="table-cell text-center">

            <div className="px-7 py-6 border border-black">Sócio ANTAC em dia</div>
            <div className="px-7 py-6 border border-black border-t-0" >Não-sócio ANTAC</div>
            </div>
            <div className="table-cell text-center">

            <div className="px-7 py-6 border border-black border-l-0 border-b-0">R$ 680,00</div>
            <div className="px-7 py-6 border border-black mb-4 border-l-0">R$ 765,00</div>
            </div>
            <div className="table-cell text-center">

            <div className="px-7 py-6 border border-black border-l-0 border-b-0">R$ 680,00</div>
            <div className="px-7 py-6 border border-black border-l-0">R$ 765,00</div>
            </div>
            <div className="table-cell text-center">
                
            <div className="px-7 py-6 border border-black border-l-0 border-b-0">R$ 680,00</div>
            <div className="px-7 py-6 border border-black border-l-0">R$ 765,00</div>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell  font-bold text-xl w-1/5  align-middle pr-2">Estudante de Pós-graduação</div>
            <div className="table-cell text-center">

            <div className="px-7 py-6 border border-black">Sócio ANTAC em dia</div>
            <div className="px-7 py-6 border border-black border-t-0" >Não-sócio ANTAC</div>
            </div>
            <div className="table-cell text-center">

            <div className="px-7 py-6 border border-black border-l-0 border-b-0">R$ 680,00</div>
            <div className="px-7 py-6 border border-black mb-4 border-l-0">R$ 765,00</div>
            </div>
            <div className="table-cell text-center">

            <div className="px-7 py-6 border border-black border-l-0 border-b-0">R$ 680,00</div>
            <div className="px-7 py-6 border border-black border-l-0">R$ 765,00</div>
            </div>
            <div className="table-cell text-center">
                
            <div className="px-7 py-6 border border-black border-l-0 border-b-0">R$ 680,00</div>
            <div className="px-7 py-6 border border-black border-l-0">R$ 765,00</div>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell font-bold text-xl align-middle pr-2">Estudante de Graduação</div>
            <div className="table-cell text-center">

            <div className="px-7 py-6 border border-black">Sócio ANTAC em dia</div>
            <div className="px-7 py-6 border border-black border-t-0" >Não-sócio ANTAC</div>
            </div>
            <div className="table-cell text-center">

            <div className="px-7 py-6 border border-black border-l-0 border-b-0">R$ 680,00</div>
            <div className="px-7 py-6 border border-black border-l-0">R$ 765,00</div>
            </div>
            <div className="table-cell text-center">

            <div className="px-7 py-6 border border-black border-l-0 border-b-0">R$ 680,00</div>
            <div className="px-7 py-6 border border-black border-l-0">R$ 765,00</div>
            </div>
            <div className="table-cell text-center">
                
            <div className="px-7 py-6 border border-black border-l-0 border-b-0">R$ 680,00</div>
            <div className="px-7 py-6 border border-black border-l-0">R$ 765,00</div>
            </div>
          </div>
        </div>
      </div>

      {/*
         
      <div className="grid grid-cols-5 grid-rows-6 items-center justify-center">
        <div></div>
        <div></div>
        <div className="flex justify-center items-center"><p>Data</p></div>
        <div className="flex justify-center items-center"><p>Data</p></div>
        <div className="flex justify-center items-center"><p>Data</p></div>


        <div className="flex justify-center items-center"><p>Profissional</p></div>

        <div className="flex flex-col justify-center items-center border-solid  border border-black">
          <p>Sócio ANTAC em dia</p>
          <p>Não-sócio ANTAC</p>
        </div>
        <div className="flex flex-col justify-center items-center border-solid  border border-black">
          < border border-blackp>R$ 680</p>
          < border border-black border-l-0p>R$ 765</p>
        </div>
        <div className="flex flex-col justify-center items-center border-solid  border border-black">
          < border border-blackp>R$ 680</p>
          < border border-black border-l-0p>R$ 765</p>
        </div>
        <div className="flex flex-col justify-center items-center border-solid  border border-black">
          < border border-blackp>R$ 680</p>
          < border border-black border-l-0p>R$ 765</p>
        </div>


        <div className="flex justify-center items-center">Estudante de Pós-Graduação</div>

        <div className="flex flex-col justify-center items-center border-solid  border border-black">
          <p>Sócio ANTAC em dia</p>
          <p>Não-sócio ANTAC</p>
        </div>
        <div className="flex flex-col justify-center items-center border-solid  border border-black">
          < border border-blackp>R$ 340</p>
          < border border-blackp>R$ 382</p>
        </div>
        <div className="flex flex-col justify-center items-center border-solid  border border-black">
          < border border-blackp>R$ 340</p>
          < border border-blackp>R$ 382</p>
        </div>
        <div className="flex flex-col justify-center items-center border-solid  border border-black">
          < border border-blackp>R$ 340</p>
          < border border-blackp>R$ 382</p>
        </div>


        <div className="flex justify-center items-center">Estudante de Graduação</div>

        <div className="flex flex-col justify-center items-center border-solid  border border-black">

            <p className="">Sócio ANTAC em dia</p>

            <p>Não-sócio ANTAC</p>
        </div>
        <div className="t">

        </div>
        <div className="flex flex-col justify-center items-center border-solid  border border-black">
            < border border-blackp>R$ 170</p>
            < border border-blackp>R$ 191</p>
        </div>
        <div className="flex flex-col justify-center items-center border-solid  border border-black">
            < border border-blackp>R$ 170</p>
            < border border-blackp>R$ 191</p>
            </div>
        <div className="flex flex-col justify-center items-center border-solid  border border-black">
            < border border-blackp>R$ 170</p>
            < border border-blackp>R$ 191</p>
        </div>
      </div>
      */}
    </div>
  );
}

export default Prices;
