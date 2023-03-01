import React from "react";

import logo from "../assets/logo-01.svg";
import Navlinks from "./Navlinks";
import logo2 from "../assets/logo-variacao-branca.svg";
import menu from "../assets/menuMobile.svg";



function Header({ toggleFunction }) {

  return (
    <header className="bg-nord0">
      <div className="max-w-6xl mx-auto p-4 lg:p-0 lg:pt-4 flex lg:flex-col items-center justify-between lg:justify-start">
        
        <a href="/" className="relative lg:mx-auto w-48  h-20 md:w-60 truncate flex justify-center items-center">
            <img src={logo2} alt="logo" className="h-60 absolute"/>
        </a>
        
        <div className="flex flex-col items-center gap-16">
          <div className="flex gap-20 pb-2 lg:pb-10 ">
           <Navlinks />
          {/*
            sidebar button
          */
            <img onClick={toggleFunction} src={menu} className="lg:hidden" />
          }
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
