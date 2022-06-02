import React from "react";
import "./Footer.css";
import logo from "../../logo.png";
import { FaFacebookSquare, FaTwitterSquare,FaPinterestSquare } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs'
import {BiCopyright} from 'react-icons/bi'


function Footer() {
  return (
    <div className="Footer">
      <div className="Footer_container">
        <div className="container1">
        <div className="left-foot">
          <input type="email" name="email" placeholder="E-mail" className="enter-email" />
          <button>Let's Talk</button>
        </div>
        <div className="center-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="right-foot">
          <a href="">about</a>
          <a href="">services</a>
          <a href="">gallery</a>
          <a href="">contact us</a>
        </div>
        </div>
        <div className="container2">
          {/* for icons */}
          <FaFacebookSquare style={{color: '#CD9F58', fontSize: '30px'}}/>
          <BsInstagram style={{color: '#CD9F58', fontSize: '29px'}}/>
          <FaTwitterSquare style={{color: '#CD9F58', fontSize: '30px'}}/>
          <FaPinterestSquare style={{color: '#CD9F58', fontSize: '30px'}}/>
        </div>
        <p id="copyright">
        <BiCopyright style={{color: 'white', fontSize: '10px'}}/> 2022 Lahar Events. All rights reserved.
        </p>
        </div>
      </div>
  );
}

export default Footer;
