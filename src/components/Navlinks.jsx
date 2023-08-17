import React, { useContext } from "react";
import { DayContext } from "../contexts/DayContext";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import { navLinks } from "../constants";

function Navlinks({ active, setActive }) {
  const currentPath = useLocation();

  const { dia } = useContext(DayContext);

  return navLinks.map((link) => (
    <div
      className="w-32 hidden lg:flex items-center justify-center "
      key={link.path}
    >
      <Link
        className={
          "navlink text-white text-center font-semibold text-xl hover:cursor-pointer z-30" +
          (currentPath.pathname === link.path ? " active" : "")
        }
        to={link.path}
        onMouseEnter={() => setActive(link.name)}
      >
        {link.name}
      </Link>
      <div
        className={`
            absolute top-40 pt-5 text-center flex flex-col items-center gap-5 w-64 bg-nord0 rounded-md transition ease-in pb-5 z-20
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
                {link.path === "/programacao" && dia === 1 && index === link.links.length -1 ? "Palestrantes e Moderadores do dia" : sublink.name}
              </ScrollLink>
            );
          })}
      </div>
    </div>
  ));
}

export default Navlinks;
