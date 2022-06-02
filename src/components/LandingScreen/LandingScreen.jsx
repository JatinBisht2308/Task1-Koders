import React from "react";
import "./LandingScreen.css";
import home_image from '../../images/home_image.jpeg';

function LandingScreen() {
  return (
    <div className="LandingScreen">
      <div className="landingScreen_container">
        <img
          src={home_image}
          alt=""
        />
        <div className="content">
          <h1> WE MAKE EVENTS MEMORABLE </h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque iusto est ut exercitationem ex nobis dolorem magnam nesciunt enim a!</p>
          <button>book now</button>
        </div>
      </div>
    </div>
  );
}

export default LandingScreen;
