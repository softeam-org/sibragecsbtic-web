import React from 'react'
import { useLocation } from "react-router-dom";


import { navLinks } from '../constants'

function Navlinks() {
    const currentPath = useLocation()
    const [active, setActive] = React.useState(null)
  return (
    navLinks.map((link) => (
        <div 
            className="w-32 flex items-center justify-center"
            key={link.path}
        >
          <a
            className={
              "navlink font-semibold text-xl hover:cursor-pointer" +
              (currentPath.pathname === link.path ? " active" : "")
            }
            onMouseEnter={() => setActive(link.name)}
            onMouseLeave={() => setActive(null)}
            >
            {link.name}
          </a>
          <div className={`
            fixed top-60 text-center flex flex-col  items-center gap-5 w-32 bg-nord0 rounded-md transition ease-in pb-5
            ${active === link.name ? "visible opacity-100" : "invisible opacity-0"}
          `}>
            { link.links.map((sublink, index) => (
              <a className="font-semibold text-xl hover:cursor-pointer" key={index}>
                {sublink.name}
              </a>
            ))}
            </div>
        </div>
      ))
  )
}

export default Navlinks