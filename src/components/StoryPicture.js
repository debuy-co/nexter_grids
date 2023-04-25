import React from "react";
import story1_img from "../assets/img/story-1.jpeg";
import story2_img from "../assets/img/story-2.jpeg";

function StoryPicture() {
  return (
    <div className="story__pictures">
      <img
        src={story1_img}
        alt="Couple with new house"
        className="story__img--1"
      />
      <img src={story2_img} alt="New House" className="story__img--2" />
    </div>
  );
}

export default StoryPicture;
