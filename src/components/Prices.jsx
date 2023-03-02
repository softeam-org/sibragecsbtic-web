import React from "react";

function Prices() {
  const [type, setType] = React.useState("Evento");

  const rows = [
    {
      title: "Profissional",
      price: {
        antac: ["R$ 680,00", "R$ 680,00", "R$ 680,00"],
        nonAntac: ["R$ 765,00", "R$ 765,00", "R$ 765,00"],
      },
    },
    {
      title: "Estudante de Pós-graduação",
      price: {
        antac: ["R$ 680,00", "R$ 680,00", "R$ 680,00"],
        nonAntac: ["R$ 765,00", "R$ 765,00", "R$ 765,00"],
      },
    },
    {
      title: "Estudante de Graduação",
      price: {
        antac: ["R$ 680,00", "R$ 680,00", "R$ 680,00"],
        nonAntac: ["R$ 765,00", "R$ 765,00", "R$ 765,00"],
      },
    },
  ];

  return (
    <div className="text-nord0 pb-40 font-medium">
      {/*Versão desktop */}
      <div className="hidden md:flex w-100 items-center justify-center gap-16 text-xl font-bold mb-16 text-zinc-300">
        <div onClick={() => setType("")}>
          <p
            className={`transition-all hover:text-nord0 hover:cursor-pointer ${
              type === "Evento" ? "text-nord0" : ""
            }`}
          >
            Evento
          </p>
        </div>
        <div onClick={() => setType("Dia da indústria")}>
          <p
            className={`transition-all hover:text-nord0 hover:cursor-pointer ${
              type === "Dia da indústria" ? "text-nord0" : ""
            }`}
          >
            Dia da indústria
          </p>
        </div>
        <div onClick={() => setType("Jantar")}>
          <p
            className={`transition-all hover:text-nord0 hover:cursor-pointer ${
              type === "Jantar" ? "text-nord0" : ""
            }`}
          >
            Jantar
          </p>
        </div>
        <div onClick={() => setType("Minicurso")}>
          <p
            className={`transition-all hover:text-nord0 hover:cursor-pointer ${
              type === "Minicurso" ? "text-nord0" : ""
            }`}
          >
            Minicurso
          </p>
        </div>
      </div>

      {/*Versão mobile */}
      <div>
        <select
          id="type-select"
          className="block w-full p-2 my-6 rounded-md bg-white border-gray-300 shadow-md  focus:border-zinc-300 focus:ring focus:ring-zinc-200 focus:ring-opacity-50"
          value={type}
          onChange={(event) => setType(event.target.value)}
        >
          <option value="Evento">Evento</option>
          <option value="Dia da indústria">Dia da indústria</option>
          <option value="Jantar">Jantar</option>
          <option value="Minicurso">Minicurso</option>
        </select>
      </div>

      <div className="mb-20 text-xl w-100 flex items-center justify-center text-nord0 font-bold">
        <h2>Preço das inscrições</h2>
      </div>

      {/*Versão desktop */}
      <div className="overflow-x-scroll md:overflow-x-hidden py-4">
        <div className=" table w-full text-lg border-separate border-spacing-0">
          <div className="table-header-group">
            <div className="table-row">
              <div className="table-cell"></div>
              <div className="table-cell"></div>
              <div className="table-cell text-center pb-4">1º dia</div>
              <div className="table-cell text-center pb-4">2º dia</div>
              <div className="table-cell text-center pb-4">3º dia</div>
            </div>
          </div>
          <div className="table-row-group">
            {rows.map((row) => {
              return (
                <div className="table-row">
                  <div className="table-cell font-bold text-xl align-middle pr-2">
                    {row.title}
                  </div>
                  <div className="table-cell text-center">
                    <div className="px-7 pt-4 md:py-0 lg:py-6 border border-black">
                      Sócio ANTAC em dia
                    </div>
                    <div className="px-7 mb-2 md:py-0 lg:py-6 border border-black border-t-0">
                      Não-sócio ANTAC
                    </div>
                  </div>
                  <div className="table-cell text-center">
                    <div className="px-7 pt-4 pb-7 md:py-0 lg:py-6 border border-black border-l-0 border-b-0">
                      {row.price.antac[0]}
                    </div>
                    <div className="px-7 pt-4 pb-3 md:py-0 lg:py-6 border border-black mb-4 border-l-0">
                      {row.price.nonAntac[0]}
                    </div>
                  </div>
                  <div className="table-cell text-center">
                    <div className="px-7 pt-4 pb-7 md:py-0 lg:py-6 border border-black border-l-0 border-b-0">
                      {row.price.antac[1]}
                    </div>
                    <div className="px-7 pt-4 pb-3 md:py-0 lg:py-6 border border-black border-l-0">
                      {row.price.nonAntac[1]}
                    </div>
                  </div>
                  <div className="table-cell text-center">
                    <div className="px-7 pt-4 pb-7 md:py-0 lg:py-6 border border-black border-l-0 border-b-0">
                      {row.price.antac[2]}
                    </div>
                    <div className="px-7 pt-4 pb-3 md:py-0 lg:py-6 border border-black border-l-0">
                      {row.price.nonAntac[2]}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prices;
