import React from "react";
import "./Footer.css";
import logo from "../../logo.png";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";


function Footer() {
  return (
    <div className="Footer">
      <div className="Footer_container">
        <div className="container1">
          <div className="left-foot">
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              className="enter-email"
            />
            <button>Let's Talk</button>
          </div>
          <div className="center-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="right-foot">
            <a href="">about</a>
            <a href="">services</a>
            <a href="">gallery</a>
            <a href="">contact</a>
          </div>
        </div>
        <div className="footer__socials">
          {/* for icons */}
          <a
            href="https://www.facebook.com/laharevents/"
            className="icon__a"
            target="_blank"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="https://www.instagram.com/laharevents/?hl=en"
            className="icon__a"
            target="_blank"
          >
            <BsInstagram />
          </a>
          <a
            href="https://www.youtube.com/channel/UCC6TjCiH2jkWrQBaRD-ALGQ"
            className="icon__a"
            target="_blank"
          >
            <IoLogoYoutube />
          </a>
        </div>
        <div className="footer__copyright">
          <small>&copy; 2022 Lahar Events. All rights reserved.</small>
        </div>
      </div>
    </div>
  );
}

export default Footer;
