import React from "react";
import logo from "../assets/img/logo.png";
import bbc from "../assets/img/logo-bbc.png";
import forbes from "../assets/img/logo-forbes.png";
import tech from "../assets/img/logo-techcrunch.png";
import bi from "../assets/img/logo-bi.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="header__logo" />
      <h3 className="heading-3">H3 titolo</h3>
      <h1 className="heading-1">H1 titolo</h1>
      <button className="btn header__btn">more info</button>
      <div className="header__seenon-text">Seen on</div>
      <div className="header__seenon-logos">
        <img src={bbc} alt="Seen on logo 1" />
        <img src={forbes} alt="Seen on logo 2" />
        <img src={tech} alt="Seen on logo 3" />
        <img src={bi} alt="Seen on logo 4" />
      </div>
    </header>
  );
}

export default Header;
