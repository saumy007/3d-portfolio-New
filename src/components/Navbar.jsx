import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, apple } from "../assets";

const Navbar = () => {
  const [active, setActive]   = useState("");
  const [toggle, setToggle]   = useState(false);
  const location              = useLocation();
  const isHomePage            = location.pathname === "/";

  const handleNavClick = (link) => {
    setActive(link.title);
    setToggle(false);
    if (!link.isRoute && isHomePage) {
      // smooth-scroll to section anchor
      const el = document.getElementById(link.id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderLink = (link, className) => {
    if (link.isRoute) {
      return (
        <Link
          to={link.path}
          className={className}
          onClick={() => handleNavClick(link)}
        >
          {link.title}
        </Link>
      );
    }
    // On the hobbies page, section links should navigate home first
    if (!isHomePage) {
      return (
        <Link
          to={`/#${link.id}`}
          className={className}
          onClick={() => handleNavClick(link)}
        >
          {link.title}
        </Link>
      );
    }
    return (
      <a href={`#${link.id}`} className={className} onClick={() => handleNavClick(link)}>
        {link.title}
      </a>
    );
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex justify-between items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo / name */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => { setActive(""); window.scrollTo(0, 0); }}
        >
          <img src={apple} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer hidden sm:block">
            Saumy Sharma
          </p>
        </Link>

        {/* Email */}
        <a
          href="mailto:saumysharma007@gmail.com"
          className="text-gray-400 hover:text-white text-[15px] font-medium cursor-pointer
                     transition-colors duration-200 hidden md:block"
        >
          saumysharma007@gmail.com
        </a>

        {/* Desktop nav links */}
        <ul className="list-none hidden sm:flex flex-row gap-8">
          {navLinks.map((link) => {
            const isActive = active === link.title ||
              (link.isRoute && location.pathname === link.path);
            return (
              <li key={link.id}>
                {renderLink(
                  link,
                  `${isActive ? "text-white" : "text-gray-400"}
                   hover:text-white text-[16px] font-medium cursor-pointer
                   transition-colors duration-200
                   ${link.isRoute
                     ? "px-3 py-1 rounded-full border border-purple-500/40 hover:border-purple-400 hover:bg-purple-900/20"
                     : ""}`
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${!toggle ? "hidden" : "flex"}
              p-6 black-gradient absolute top-20 right-0 mx-4 my-2
              min-w-[160px] z-10 rounded-xl shadow-xl`}
          >
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = active === link.title;
                return (
                  <li key={link.id}>
                    {renderLink(
                      link,
                      `${isActive ? "text-white" : "text-gray-400"}
                       font-medium cursor-pointer text-[15px]
                       hover:text-white transition-colors duration-200`
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
