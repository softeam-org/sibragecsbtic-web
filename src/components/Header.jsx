import React, { useState } from "react";

import logo from "../assets/logo-01.svg";
import Navlinks from "./Navlinks";
import logo2 from "../assets/logo-variacao-branca.svg";
import menu from "../assets/menuMobile.svg";
import { Link } from "react-router-dom";



function Header({ toggleFunction }) {
  const [active, setActive] = React.useState(null);

  return (
    <header className="mb-20 lg:mb-0">
      <div 
      className="w-full bg-nord0 fixed z-50 top-0 lg:static"
      onMouseLeave={() => setActive(null)} 
      >
      <div className="mx-auto max-w-6xl z-30 p-4 gap-20  lg:p-0 lg:pt-4 flex lg:flex-col items-center justify-between lg:justify-start">
        <Link to="/" className="w-48 h-20 md:w-60 flex justify-center items-center">
            <img src={logo2} alt="logo" className="w-60 absolute"/>
        </Link>
        
        <div className="flex flex-col items-center gap-16">
          <div className="flex gap-20 pb-2 lg:pb-10 ">
           <Navlinks active={active} setActive={setActive} />
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
