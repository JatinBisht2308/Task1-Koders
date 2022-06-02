import React from "react";
import "./Navbar.css";
import logo from '../../logo.png';

function Navbar() {
  return (
    <div className="Navbar">
      <div className="navbar_container">
        <div className="left-nav">
          <a href="">about</a>
          <a href="">services</a>
        </div>
        <div className="center-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="right-nav">
          <a href="">gallery</a>
          <a href="">contact us</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
