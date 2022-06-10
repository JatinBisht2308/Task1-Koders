import React from "react";
import "./Navbar.css";
import logo from '../../logo.png';
import { MdOutlineLegendToggle } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

function Navbar() {

  let nav = useNavigate();
  const showNav = () => {
      const nav = document.querySelector('.toggleNavbar');
      
      nav.classList.toggle('toggleShow');
  }

  const navigate = (e) => {
    nav("/" + e.target.innerText);
  }

  return (
    <div className="Navbar">
      <div className="navbar_container">
        <div className="left-nav">
          <a onClick={(e) => {navigate(e)}}>about</a>
          <a onClick={(e) => {navigate(e)}}>services</a>
        </div>
        <div className="nav-center-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="right-nav">
          <a onClick={(e) => {navigate(e)}}>gallery</a>
          <a onClick={(e) => {navigate(e)}}>contact</a>
        </div>
        <a className="toggleIcon" onClick={showNav}>
          <MdOutlineLegendToggle style={{fontSize: "30px"}} />
        </a>
        </div>
        <div className="toggleNavbar">
          <a href="" className="toggleNavbarItem">about</a>
          <a href="" className="toggleNavbarItem">services</a>
          <a href="" className="toggleNavbarItem">gallery</a>
          <a href="" className="toggleNavbarItem">contact</a>
        </div>
    </div>
  );
}

export default Navbar;
