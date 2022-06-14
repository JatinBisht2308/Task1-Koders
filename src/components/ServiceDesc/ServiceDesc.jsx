// export default ServiceDesc;
import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import { FaRupeeSign } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./ServiceDesc.css";
import "animate.css";
import AOS from "aos";

const items = [
  {
    src: "/25anniversary_1.webp",
    altText: "Slide 1",
  },
  {
    src: "/25anniversary_2.webp",
    altText: "Slide 2",
  },
  {
    src: "/25anniversary_3.webp",
    altText: "Slide 3",
  },
];

function ServiceDesc() {
  AOS.init({
    duration:1000
  });
  return (
    <>
      <Navbar />
      <div className="ServiceDesc">
        <div
          className="left__Service__Desc"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"
          />
          <div className="left__inner__images">
            <UncontrolledCarousel items={items} />
          </div>
        </div>
        <div className="right__Service__Desc"
        data-aos="fade-left"
        data-aos-delay="300">
          <h1 className="head_right_serviceDesc">Wedding Event</h1>
          <div className="stars_rating">
            <h5>4 </h5>
            <AiFillStar className="sitara" />
            <AiFillStar className="sitara" />
            <AiFillStar className="sitara" />
            <AiFillStar className="sitara" />
          </div>
          <div className="price">
            <h4>
              <FaRupeeSign className="rupees_sign" />
              10999
            </h4>
            <small>onwards.</small>
          </div>
          <div className="right_inner_desc">
            <p>
              Our philosophy is one which advocates personalisation, attention
              to detail and a seamless wedding planning process.We pride
              ourselves in delivering top class service together with an
              exceptional product.
            </p>
          </div>
          <div className="btn__service_right">
            <button className="share">share</button>
            <button className="book_now">book now</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ServiceDesc;
