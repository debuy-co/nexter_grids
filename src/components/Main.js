import React from "react";
import Features from "./Features";
import StoryContent from "./StoryContent";
import StoryPicture from "./StoryPicture";
import Homes from "./Homes";
import Gallery from "./Gallery";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Realtors from "./Realtors";

function Main() {
  return (
    <body className="container">
      <Sidebar />
      <Header />
      <Realtors />
      <Features />
      <StoryPicture />
      <StoryContent />
      <Homes />
      <Gallery />
      <Footer />
    </body>
  );
}

export default Main;
