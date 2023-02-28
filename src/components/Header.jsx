import React from "react";

import logo from "../assets/logo-01.svg";
import Navlinks from "./Navlinks";
import logo2 from "../assets/logo-variacao-branca.svg";



function Header() {

  return (
    <header className="bg-nord0">
      <div className="max-w-6xl mx-auto pt-4">
        
        <a href="/" className="relative h-28 truncate overflow: hidden; flex justify-center items-center">
            <img src={logo2} alt="logo" className="h-60 absolute"/>
        </a>
        
        <div className="flex flex-col items-center gap-16">
          {/* <a href="/">
            <h1 className="text-7xl font-bold text-white">Sibragec XXIII</h1>
          </a> */}
          <div className="flex gap-20 pb-10 ">
           <Navlinks />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
