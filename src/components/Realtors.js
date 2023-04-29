import React from "react";
import realtor1 from "../assets/img/realtor-1.jpeg";
import realtor2 from "../assets/img/realtor-2.jpeg";
import realtor3 from "../assets/img/realtor-3.jpeg";

function Realtors() {
  return (
    <div className="realtors">
      <h3 className="heading-3">Top 3 things</h3>
      <div className="realtors__list">
        <img src={realtor1} alt="Realtor1" className="realtors__img" />
        <div className="realtors__details">
          <h4 className="heading-4 heading-4--light">Erik</h4>
          <p className="realtors__sold">245 houses sold</p>
        </div>
        <img src={realtor2} alt="Realtor2" className="realtors__img" />
        <div className="realtors__details">
          <h4 className="heading-4 heading-4--light">Megane</h4>
          <p className="realtors__sold">15 houses sold</p>
        </div>
        <img src={realtor3} alt="Realtor3" className="realtors__img" />
        <div className="realtors__details">
          <h4 className="heading-4 heading-4--light">Paul</h4>
          <p className="realtors__sold">186 houses sold</p>
        </div>
      </div>
    </div>
  );
}

export default Realtors;
