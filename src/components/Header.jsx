import React from "react";

import logo from "../assets/logo-01.svg";
import { useLocation } from "react-router-dom";


const navLinks = [
  { name: "Início", path: "/" },
  { name: "Programação", path: "/programacao" },
  { name: "Inscrições", path: "/inscricoes" },
  { name: "Submissão", path: "/submissao" },
  { name: "Local", path: "/local" },
];




function Header() {
  const currentPath = useLocation();
  

  return (
    <header className="bg-nord0">
      <div className="max-w-6xl mx-auto pt-14">

      <div className="w-28 absolute left-36 top-8">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex flex-col items-center gap-16">
        <h1 className="text-7xl font-bold text-white">Sibragec XXIII</h1>
        <div className="flex gap-20 pb-12">
          {
            navLinks.map((link) => (
              <a 
                className={
                  "navlink font-semibold text-xl" 
                  + 
                  (currentPath.pathname === link.path ? " active" : "")}
              >
                {link.name}
              </a>
          ))}
        </div>
      </div>
      </div>
    </header>
  );
}

export default Header;
