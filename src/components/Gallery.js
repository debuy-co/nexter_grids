import React from "react";
import gal_1 from "../assets/img/gal-1.jpeg";
import gal_2 from "../assets/img/gal-2.jpeg";
import gal_3 from "../assets/img/gal-3.jpeg";
import gal_4 from "../assets/img/gal-4.jpeg";
import gal_5 from "../assets/img/gal-5.jpeg";
import gal_6 from "../assets/img/gal-6.jpeg";
import gal_7 from "../assets/img/gal-7.jpeg";
import gal_8 from "../assets/img/gal-8.jpeg";
import gal_9 from "../assets/img/gal-9.jpeg";

function Gallery() {
  return (
    <section className="gallery">
      <img
        src={gal_1}
        alt="Gallery image 1"
        className="gallery__img gallery__img--img1"
      />
      <img src={gal_2} alt="Gallery image 2" className="gallery__img" />
      <img src={gal_3} alt="Gallery image 3" className="gallery__img" />
      <img src={gal_4} alt="Gallery image 4" className="gallery__img" />
      <img src={gal_5} alt="Gallery image 5" className="gallery__img" />
      <img src={gal_6} alt="Gallery image 6" className="gallery__img" />
      <img src={gal_7} alt="Gallery image 7" className="gallery__img" />
      <img src={gal_8} alt="Gallery image 8" className="gallery__img" />
      <img src={gal_9} alt="Gallery image 9" className="gallery__img" />
    </section>
  );
}

export default Gallery;
