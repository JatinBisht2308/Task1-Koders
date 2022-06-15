import React from "react";
import "./Footer.css";
import logo from "../../logo.png";
import { FaFacebookSquare } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import "animate.css";
import AOS from "aos";
import { useNavigate } from "react-router-dom";

function Footer() {
  let nav = useNavigate();
  AOS.init();

  const navigate = (e) => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    nav("/" + e.target.innerText);
  };

  return (
    <div className="Footer">
      <div className="Footer_container">
        <div className="container1">
          <div className="footer__socials">
            {/* for icons */}
            <a
              href="https://www.facebook.com/laharevents/"
              className="icon__a"
              target="_blank"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <FaFacebookSquare />
            </a>
            <a
              href="https://www.instagram.com/laharevents/?hl=en"
              className="icon__a"
              target="_blank"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <BsInstagram />
            </a>
            <a
              href="https://www.youtube.com/channel/UCC6TjCiH2jkWrQBaRD-ALGQ"
              className="icon__a"
              target="_blank"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <IoLogoYoutube />
            </a>
            <a
              href="https://wa.me/919720058865"
              className="icon__a"
              target="_blank"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <RiWhatsappFill />
            </a>
          </div>
          <div
            className="center-logo"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <a
              onClick={() => {
                nav("/");
              }}
            >
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="right-foot" data-aos="fade-left" data-aos-delay="100">
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
        </div>
        <div className="footer__socials2">
          {/* for icons */}
          <a
            href="https://www.facebook.com/laharevents/"
            className="icon__a"
            target="_blank"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="https://www.instagram.com/laharevents/?hl=en"
            className="icon__a"
            target="_blank"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <BsInstagram />
          </a>
          <a
            href="https://www.youtube.com/channel/UCC6TjCiH2jkWrQBaRD-ALGQ"
            className="icon__a"
            target="_blank"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <IoLogoYoutube />
          </a>
          <a
            href="https://wa.me/919720058865"
            className="icon__a"
            target="_blank"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <RiWhatsappFill />
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
