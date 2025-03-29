import React from "react";
import "../styles/Header.css";
import Logo from "../assets/images/monks_logo.png";
import Hero from "../assets/images/monks_hero.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt=".Monks" />
      </div>
      <nav className="nav">
        <ul>
          <li>Categoria 1</li>
          <li>Categoria 2</li>
          <li>Categoria 3</li>
          <li>Categoria 4</li>
        </ul>
      </nav>
        <div className="monks-hero">
          <img src={Hero} alt="Monks Hero" />
        </div>
    </header>
  );
};

export default Header;
