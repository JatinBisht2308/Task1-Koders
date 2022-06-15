import React from "react";
import "./LandingScreen.css";
import 'animate.css';
import AOS from 'aos';

function LandingScreen({ imgsrc, title, desc, isButton }) {
  AOS.init();
  return (
    <div className="LandingScreen"
    data-aos="fade-down"
    data-aos-delay="150"
    >
      <div className="landingScreen_container">
        <img src={imgsrc} alt="" />
        <div className="content">
          <h1> {title} </h1>
          <p>{desc}</p>
          {isButton == "true" && <button onClick={() => { window.open("https://wa.me/919720058865", "_blank")}} >book now</button>}
        </div>
      </div>
    </div>
  );
}

export default LandingScreen;
