import React from "react";

import "./homePage.css";
import videoBg from "../videos/home-water.mp4";

function HomePage() {
  return (
    <div>
      <h1 id="homePage_title">Welcome Home, It's time to get on the water!</h1>
      <div className="#homePage_body"> </div>
      <div className="homePage video_bg">
        <video loop muted autoPlay disablePictureInPicture id="homePage__video">
          <source src={videoBg} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default HomePage;
