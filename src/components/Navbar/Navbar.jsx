import React from "react";
import "./Navbar.css";
import logo from "../../logo.png";
import { MdOutlineLegendToggle } from "react-icons/md";
import { useNavigate } from "react-router-dom";
// imporitng the animation
import "animate.css";
import AOS from "aos";

function Navbar() {
  // for initalizing the animation
  AOS.init();

  let nav = useNavigate();
  const showNav = () => {
    const nav = document.querySelector(".toggleNavbar");

    nav.classList.toggle("toggleShow");
  };

  const navigate = (e) => {
    nav("/" + e.target.innerText);
  };

  return (
    <div className="Navbar">
      <div className="navbar_container">
        <div
          className="left-nav"
          data-aos="fade-right"
          data-aos-delay="250"
          data-aos-once="false"
        >
          <a
            onClick={(e) => {
              navigate(e);
            }}
          >
            about
          </a>
          <a
            onClick={(e) => {
              navigate(e);
            }}
          >
            services
          </a>
        </div>
        <div
          className="nav-center-logo"
          data-aos="fade-down"
          data-aos-delay="300"
          data-aos-once="false"
        >
          <img src={logo} alt="logo" />
        </div>
        <div
          className="right-nav"
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-once="false"
        >
          <a
            onClick={(e) => {
              navigate(e);
            }}
          >
            gallery
          </a>
          <a
            onClick={(e) => {
              navigate(e);
            }}
          >
            contact
          </a>
        </div>
        <a className="toggleIcon" onClick={showNav}>
          <MdOutlineLegendToggle
            style={{ fontSize: "30px", cursor: "pointer" }}
          />
        </a>
      </div>
      <div className="toggleNavbar">
        <a
          onClick={(e) => {
            navigate(e);
          }}
          className="toggleNavbarItem"
        >
          about
        </a>
        <a
          onClick={(e) => {
            navigate(e);
          }}
          className="toggleNavbarItem"
        >
          services
        </a>
        <a
          onClick={(e) => {
            navigate(e);
          }}
          className="toggleNavbarItem"
        >
          gallery
        </a>
        <a
          onClick={(e) => {
            navigate(e);
          }}
          className="toggleNavbarItem"
        >
          contact
        </a>
      </div>
    </div>
  );
}

export default Navbar;
