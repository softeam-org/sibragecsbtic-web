import React from "react";

import logo from "../assets/logo-01.svg";
import Navlinks from "./Navlinks";
import logo2 from "../assets/logo-variacao-branca.svg";
import menu from "../assets/menuMobile.svg";



function Header({ toggleFunction }) {

  return (
    <header className="mb-20 lg:mb-0">
      <div className="w-full bg-nord0 fixed top-0 lg:static">
      <div className="mx-auto max-w-6xl z-30 p-4 gap-20  lg:p-0 lg:pt-4 flex lg:flex-col items-center justify-between lg:justify-start">
        <a href="/" className="w-48 h-20 md:w-60 flex justify-center items-center">
            <img src={logo2} alt="logo" className="w-60 absolute"/>
        </a>
        
        <div className="flex flex-col items-center gap-16">
          <div className="flex gap-20 pb-2 lg:pb-10 ">
           <Navlinks />
          {
            <img onClick={toggleFunction} src={menu} className="lg:hidden" />
          }
          </div>
        </div>
          </div>
      </div>
    </header>
  );
}

export default Header;
