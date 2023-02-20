import React from "react";

import logo from "../assets/logo-01.svg";

function Header() {
  return (
    <header className="bg-nord0">
      <div className="max-w-6xl mx-auto pt-14">

      <div className="w-28 absolute left-36 top-8">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex flex-col items-center gap-16">
        <h1 className="text-7xl font-bold text-white">Sibragec XXIII</h1>
        <div className="flex gap-20 pb-12">
          <a className="font-semibold text-xl">Início</a>
          <a className="font-semibold text-xl">Programação</a>
          <a className="font-semibold text-xl">Inscrições</a>
          <a className="font-semibold text-xl">Submissão</a>
          <a className="font-semibold text-xl">Local</a>
        </div>
      </div>
      </div>
    </header>
  );
}

export default Header;
