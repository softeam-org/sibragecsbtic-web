import React from "react";

function Prices() {

    const [type, setType] = React.useState('Evento');



  return (
    <div className="text-nord0 pb-40 font-medium">
      <div className="flex w-100 items-center justify-center gap-16 text-xl font-bold mb-16 text-zinc-300">
        <div
            onClick={() => setType('Evento')}
        >
          <p className={`transition-all hover:text-nord0 hover:cursor-pointer ${type === 'Evento' ? 'text-nord0' : ''}`}>Evento</p>
        </div>
        <div
            onClick={() => setType('Dia da indústria')}
        >
          <p className={`transition-all hover:text-nord0 hover:cursor-pointer ${type === 'Dia da indústria' ? 'text-nord0' : ''}`}>Dia da indústria</p>
        </div>
        <div
            onClick={() => setType('Jantar')}
        >
          <p className={`transition-all hover:text-nord0 hover:cursor-pointer ${type === 'Jantar' ? 'text-nord0' : ''}`}>Jantar</p>
        </div>
        <div
            onClick={() => setType('Minicurso')}
        >
          <p className={`transition-all hover:text-nord0 hover:cursor-pointer ${type === 'Minicurso' ? 'text-nord0' : ''}`}>Minicurso</p>
        </div>
      </div>

      <div className="mb-20 text-xl w-100 flex items-center justify-center text-nord0 font-bold">
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

      
    </div>
  );
}

export default Prices;
