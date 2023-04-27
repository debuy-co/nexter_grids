import React from "react";
import Features from "./Features";
import StoryContent from "./StoryContent";
import StoryPicture from "./StoryPicture";
import Homes from "./Homes";

function Main() {
  return (
    <body className="container">
      <div className="sidebar">Sidebar</div>
      <header className="header">Header</header>
      <div className="realtors">Realtors</div>
      <Features />
      <StoryPicture />
      <StoryContent />
      <Homes />
      <section className="gallery">Gallery</section>
      <footer className="footer">Footer</footer>
    </body>
  );
}

export default Main;
