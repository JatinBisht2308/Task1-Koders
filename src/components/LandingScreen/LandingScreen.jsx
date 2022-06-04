import React from "react";
import "./LandingScreen.css";
import home_image from '../../images/home_image.jpeg';

function LandingScreen({ imgsrc, title, desc, isButton }) {
  return (
    <div className="LandingScreen">
      <div className="landingScreen_container">
        <img
          src={imgsrc}
          alt=""
        />
        <div className="content">
          <h1> {title} </h1>
          <p>{desc}</p>
          { isButton=="true" && <button>book now</button> }
        </div>
      </div>
    </div>
  );
}

export default LandingScreen;
