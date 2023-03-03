import React from 'react'
import { Link, useLocation } from "react-router-dom";


import { navLinks } from '../constants'

function Navlinks({ active, setActive }) {
    const currentPath = useLocation()
  return (
    navLinks.map((link) => (
        <div 
            className="w-32 hidden lg:flex items-center justify-center "
            key={link.path}
        >
          <Link
            className={
              "navlink font-semibold text-xl hover:cursor-pointer z-30" +
              (currentPath.pathname === link.path ? " active" : "")
            }
            to={link.path}
            onMouseEnter={() => setActive(link.name)}
            >
            {link.name}
          </Link>
          <div className={`
            absolute top-40 text-center flex flex-col items-center gap-5 w-32 bg-nord0 rounded-md transition ease-in pb-5 z-20
            ${active === link.name ? "visible opacity-100" : "invisible opacity-0"}
          `}
            onMouseLeave={() => setActive(null)}
            onMouseEnter={() => setActive(link.name)}
            
          >
            { link.links.map((sublink, index) => (
              <Link 
                className={`font-semibold text-xl hover:cursor-pointer ${index === 0 ? "pt-16" : ""}`}
                key={index}
                to={sublink.path}
                >
                {sublink.name}
              </Link>
            ))}
            </div>
        </div>
      ))
  )
}

export default Navlinks