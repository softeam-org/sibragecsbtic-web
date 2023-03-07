import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import { navLinks } from "../constants";

function Navlinks({ active, setActive }) {
  const currentPath = useLocation();
  return navLinks.map((link) => (
    <div
      className="w-32 hidden lg:flex items-center justify-center "
      key={link.path}
    >
      <Link
        className={
          "navlink text-white font-semibold text-xl hover:cursor-pointer z-30" +
          (currentPath.pathname === link.path ? " active" : "")
        }
        to={link.path}
        onMouseEnter={() => setActive(link.name)}
      >
        {link.name}
      </Link>
      <div
        className={`
            absolute top-40 text-center flex flex-col items-center gap-5 w-32 bg-nord0 rounded-md transition ease-in pb-5 z-20
            ${
              active === link.name
                ? "visible opacity-100"
                : "invisible opacity-0"
            }
          `}
        onMouseLeave={() => setActive(null)}
        onMouseEnter={() => setActive(link.name)}
      >
        {currentPath.pathname === link.path &&
          link.links.map((sublink, index) => {
            return (
              <ScrollLink
                className={`font-semibold px-2 text-xl hover:cursor-pointer text-white ${
                  index === 0 ? "pt-16" : ""
                }`}
                key={index}
                to={sublink.path}
                smooth
                duration={500}
              >
                {sublink.name}
              </ScrollLink>
            );
          })}
      </div>
    </div>
  ));
}

export default Navlinks;
