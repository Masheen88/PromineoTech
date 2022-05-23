import React from "react";

import "./homePage.css";
import videoBg from "../videos/water.mp4";

function HomePage() {
  return (
    //   <div className="video_bg">
    //   <video loop muted autoPlay id="homePage__video">
    //     <source src={videoBg} type="video/mp4" />
    //   </video>
    // </div>
    <div className="homePage video_bg">
      <h1 id="homePage_title">Welcome Home, It's time to get on the water!</h1>
      <video loop muted autoPlay disablePictureInPicture id="homePage__video">
        <source src={videoBg} type="video/mp4" />
      </video>
    </div>
  );
}

export default HomePage;
