import React, { useRef } from "react";

import { navLinks } from "../constants";
import closeSvg from "../assets/close.svg";
import logo from "../assets/logo-01.svg";
import { Link } from "react-router-dom";

function Sidebar({ closeSidebar, sidebarOpen }) {
  const toggleCloseSidebar = () => {
    if (closeSidebar) {
      closeSidebar();
    }
  };

  const sidebarContentClass = sidebarOpen
    ? "transition-transform duration-200 ease-in-out transform translate-x-0 "
    : "transition-transform duration-200 ease-in-out transform -translate-x-full";

  const overlayClass = sidebarOpen
  ? 'fixed inset-0 bg-gray-900 bg-opacity-50 z-40 transition-opacity duration-200 ease-in-out'
  : 'fixed inset-0 bg-transparent bg-opacity-50 z-40 transition-all duration-300 ease-in-out opacity-100 pointer-events-none delay-200';

  return (
    <>
      <div
        className={`fixed top-0 z-50 bg-white w-9/12 sm:w-2/5 h-full ${sidebarContentClass}`}
      >
        <div
          className="p-4 pr-5 flex justify-end"
          onClick={toggleCloseSidebar}
        >
          <img className={""} src={closeSvg} alt="close" />
        </div>
        <div className="p-2 mt-12">
          <ul className={`text-nord0 flex flex-col gap-10`}>
            {navLinks.map((link, index) => (
              <li key={index} className={`text-3xl font-bold`}>
                <Link onClick={toggleCloseSidebar} to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-24 w-full">
          <img className="w-full" src={logo} alt="" />
        </div>
      </div>
      <div onClick={toggleCloseSidebar} className={overlayClass}></div>
    </>
  );
}

export default Sidebar;
