import React from "react";
import "./SplashScreen.css";
import logo from "../../logo.png";
import { useSpring, animated } from "react-spring";
import "animate.css";
import AOS from "aos";

function SplashScreen() {
  const imgStyle = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });
  AOS.init({
    duration:1000
  });
  return (
    <div className="SplashScreen" data-aos="fade-up" data-aos-delay="300">
      <animated.img src={logo} alt="logo" style={imgStyle} />
    </div>
  );
}

export default SplashScreen;
