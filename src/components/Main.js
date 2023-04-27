import React from "react";
import Features from "./Features";
import StoryContent from "./StoryContent";
import StoryPicture from "./StoryPicture";
import Homes from "./Homes";
import Gallery from "./Gallery";

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
      <Gallery />
      <footer className="footer">Footer</footer>
    </body>
  );
}

export default Main;
