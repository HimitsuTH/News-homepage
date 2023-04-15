import React, { useState } from "react";
import menuClose from "../assets/images/icon-menu-close.svg";
import menu from "../assets/images/icon-menu.svg";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handdleOpenMenu = () => {
    const menu = document.getElementById("menu");

    setToggle(!toggle);
    menu.classList.toggle("menu--active");
  };

  return (
    <header className="header">
      <h1>W.</h1>
      <button onClick={handdleOpenMenu} className="btn btn--menu">
        <img src={toggle ? menuClose : menu} alt="icon-menu" />
      </button>
      <nav id="menu" className="menu">
        <a href="#" className="link link--menu">Home</a>
        <a href="#" className="link link--menu">News</a>
        <a href="#" className="link link--menu">Popular</a>
        <a href="#" className="link link--menu">Trending</a>
        <a href="#" className="link link--menu">Cetegories</a>
      </nav>
    </header>
  );
};

export default Header;
