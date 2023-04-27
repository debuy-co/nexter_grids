import React from "react";
import Home1 from "../assets/img/house-1.jpeg";
import sprite from "../assets/img/sprite.svg";

function Homes() {
  return (
    <section className="homes">
      <div className="home">
        <img src={Home1} alt="Home 1" className="home__img" />
        <svg className="home__like">
          <use href={`${sprite}#icon-heart-full`}></use>
        </svg>
        <h5 className="home__name">Beautiful family house</h5>
        <div className="home__location">
          <svg>
            <use href={`${sprite}#icon-map-pin`}></use>
          </svg>
          <p>USA</p>
        </div>

        <div className="home__rooms">
          <svg>
            <use href={`${sprite}#icon-profile-male`}></use>
          </svg>
          <p>5 rooms</p>
        </div>

        <div className="home__area">
          <svg>
            <use href={`${sprite}#icon-expand`}></use>
          </svg>
          <p>
            325 m <sup>2</sup>{" "}
            {/*the sup give a bit higher text compare to normal one*/}
          </p>
        </div>

        <div className="home__price">
          <svg>
            <use href={`${sprite}#icon-key`}></use>
          </svg>
          <p>$ 1,200,000</p>
        </div>
        <button className="btn home__button">Prova</button>
      </div>
      <div className="home">home card 2</div>
      <div className="home">home card 3</div>
      <div className="home">home card 4</div>
      <div className="home">home card 5</div>
      <div className="home">home card 6</div>
    </section>
  );
}

export default Homes;
