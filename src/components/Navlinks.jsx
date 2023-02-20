import React from 'react'
import { useLocation } from "react-router-dom";


import { navLinks } from '../constants'

function Navlinks() {
    const currentPath = useLocation()
  return (
    navLinks.map((link) => (
        <div className="w-24 flex items-center justify-center">
          <a
            className={
              "navlink font-semibold text-xl hover:cursor-pointer" +
              (currentPath.pathname === link.path ? " active" : "")
            }
            >
            {link.name}
          </a>
          <div className="fixed top-60 flex text-center items-center flex-col w-24 gap-2 bg-nord0">
            { link.links.map((sublink) => (
              <a
                className={
                  "font-semibold hover:cursor-pointer"
                }
                >
                {sublink.name}
              </a>
            ))}
            </div>
        </div>
      ))
  )
}

export default Navlinks