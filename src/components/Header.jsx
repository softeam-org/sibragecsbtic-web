import React from "react";

import logo from "../assets/logo-01.svg";
import Navlinks from "./Navlinks";



function Header() {

  return (
    <header className="bg-nord0">
      <div className="max-w-6xl mx-auto pt-16">
        <a href="/" className="w-32 absolute left-36 top-8">
          <div>
            <img src={logo} alt="logo" />
          </div>
        </a>
        <div className="flex flex-col items-center gap-16">
          <a href="/">
            <h1 className="text-7xl font-bold text-white">Sibragec XXIII</h1>
          </a>
          <div className="flex gap-20 pb-10 ">
           <Navlinks />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
