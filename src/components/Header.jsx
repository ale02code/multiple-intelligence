import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import multipleIntelligenceIcon from "../assets/icons/multiple-intelligence.png";
import menuIcon from "../assets/icons/menu.png";
import menuExitIcon from "../assets/icons/close.png";

function Header() {
  const [menu, setMenu] = useState(false);
  const [positionScroll, setPositionScroll] = useState(0);
  const [hiddenScroll, setHiddenScroll] = useState(false);

  const handleMenu = () => {
    setMenu((prevMenu) => !prevMenu);
  };

  const handleScrollEffect = () => {
    let currentScroll = window.scrollY;
    setHiddenScroll(currentScroll > positionScroll);
    setPositionScroll(currentScroll);
  };

  useEffect(() => {
    const handleScroll = () => {
      handleScrollEffect();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [positionScroll]);

  return (
    <header
      className={`z-20 h-24 w-full fixed top-0 left-0 bg-green-moss py-1 transition-transform duration-250 ${
        hiddenScroll && !menu ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="flex h-full w-full justify-between items-center relative z-30">
        <img
          className="h-full relative z-40"
          src={multipleIntelligenceIcon}
          alt="multiple intelligence"
        />

        <img
          className="hidden h-2/3 max-sm:mr-10 max-sm:block relative z-40 cursor-pointer"
          src={menu ? menuExitIcon : menuIcon}
          alt="menu icon"
          onClick={handleMenu}
        />

        <ul
          className={`h-full flex justify-center items-center text-white mr-16 gap-5 max-sm:bg-green-moss max-sm:absolute max-sm:flex-col max-sm:w-screen max-sm:z-10 max-sm:transition-transform max-sm:duration-300 max-sm:top-0 ${
            menu
              ? "max-sm:translate-y-0 max-sm:h-screen max-sm:flex"
              : "max-sm:-translate-y-[100vh]"
          }`}
        >
          <li className="text-xl text-center capitalize hover:underline hover:cursor-pointer hover:text-neutral-200 max-sm:w-[90%] max-sm:text-2xl">
            <Link to="/">Teoría de las inteligencias múltiples</Link>
          </li>
          <li className="text-xl text-center capitalize hover:underline hover:cursor-pointer hover:text-neutral-200 max-sm:w-[90%] max-sm:text-2xl">
            <Link to="/quizz">Test de las inteligencias múltiples</Link>
          </li>
          <li className="text-xl text-center capitalize hover:underline hover:cursor-pointer hover:text-neutral-200 max-sm:w-[90%] max-sm:text-2xl">
            <Link to="/intelligences">Tipos de inteligencias</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
