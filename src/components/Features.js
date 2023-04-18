import React from "react";
import sprite from "../assets/img/sprite.svg";

function Features() {
  return (
    <section className="features">
      <div className="feature">
        <svg className="feature__icon">
          <use href={`${sprite}#icon-global`}></use>
        </svg>
        <h4 className="heading-4">Prova titolo</h4>
        <p className="feature__text">Prova testo</p>
      </div>
      <div className="feature">
        <svg className="feature__icon">
          <use href={`${sprite}#icon-global`}></use>
        </svg>
        <h4 className="heading-4">Prova titolo</h4>
        <p className="feature__text">Prova testo</p>
      </div>
      <div className="feature">
        <svg className="feature__icon">
          <use href={`${sprite}#icon-global`}></use>
        </svg>
        <h4 className="heading-4">Prova titolo</h4>
        <p className="feature__text">Prova testo</p>
      </div>
      <div className="feature">
        <svg className="feature__icon">
          <use href={`${sprite}#icon-global`}></use>
        </svg>
        <h4 className="heading-4">Prova titolo</h4>
        <p className="feature__text">Prova testo</p>
      </div>
      <div className="feature">
        <svg className="feature__icon">
          <use href={`${sprite}#icon-global`}></use>
        </svg>
        <h4 className="heading-4">Prova titolo</h4>
        <p className="feature__text">Prova testo</p>
      </div>
      <div className="feature">
        <svg className="feature__icon">
          <use href={`${sprite}#icon-global`}></use>
        </svg>
        <h4 className="heading-4">Prova titolo</h4>
        <p className="feature__text">Prova testo</p>
      </div>
    </section>
  );
}

export default Features;
