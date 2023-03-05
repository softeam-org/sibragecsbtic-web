import React, { useState } from "react";

import logo from "../assets/logo-01.svg";
import Navlinks from "./Navlinks";
import logo2 from "../assets/logo-variacao-branca.svg";
import menu from "../assets/menuMobile.svg";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";



function Header({ toggleFunction }) {
  const [active, setActive] = React.useState(null);

  return (
    <header className="mb-14 lg:mb-0">
      <div 
      className="w-full bg-nord0 fixed pb-1 z-30 top-0 lg:static"
      onMouseLeave={() => setActive(null)} 
      >
      <div className="mx-auto max-w-6xl z-30 px-6 gap-10  lg:p-0 lg:pt-4 flex lg:flex-col items-center justify-between lg:justify-start">
        <Link to="/" className="max-w-6xl py-2">
            <img src={logo2} alt="logo" className="w-3/5 lg:w-2/5 lg:mx-auto"/>
        </Link>
        
        <div className="flex flex-col items-center gap-16">
          <div className="flex gap-20 pb-2 lg:pb-10 ">
           <Navlinks active={active} setActive={setActive} />
            <AiOutlineMenu color="white" onClick={ toggleFunction } size={30} className="lg:hidden" />
          </div>
        </div>
          </div>
      </div>
    </header>
  );
}

export default Header;
