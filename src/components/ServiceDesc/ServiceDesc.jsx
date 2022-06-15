import React, { Suspense, lazy } from "react";
import { UncontrolledCarousel } from "reactstrap";
import { FaRupeeSign } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import "./ServiceDesc.css";
import "animate.css";
import AOS from "aos";

function ServiceDesc({ items, title, desc, price }) {
  AOS.init({
    duration: 1000,
  });
  return (
    <>
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
        <div
          className="right__Service__Desc"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <h1 className="head_right_serviceDesc">{title}</h1>
          <div className="stars_rating">
            <AiFillStar className="sitara" />
            <AiFillStar className="sitara" />
            <AiFillStar className="sitara" />
            <AiFillStar className="sitara" />
          </div>
          <div className="price">
            <h4>
              <FaRupeeSign className="rupees_sign" />
              {price}
            </h4>
            <small>onwards.</small>
          </div>
          <div className="right_inner_desc">
            <p>
              {desc}
            </p>
          </div>
          <div className="btn__service_right">
            <button className="book_now" onClick={() => {
            window.open(`http://api.whatsapp.com/send?phone=919720058865&text=${`Hi, I want details about ${title}`}`, "_blank")
          }} >book now</button>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default ServiceDesc;

// Content for everyevent
// 1)- Already Ha
// 2)- Anniversary Events
// Congrats on reaching this milestone. Use our website's services and start planning for your next anniversary. Compile contact info, stay and transport details.

// 3)- Haldi Event
// A Haldi ceremony can be described as a perfect blend of tradition and fun. This pre-wedding function has been an important part of Indian Weddings for a very long time and for a good reason

// 4)- Birthday Event
// Let us handle the birthday party and you just enjoy your memorable moments, make your guests surprise by your best birthday bash in the town. We have made many parents happy with our birthday party decorations.

// 5)- Mundan Event
// At Lahar Events to sooth the new born we design a pacifying theme along with sweet and customized music. We ensures everything which makes you event a memorable one.

// 6)- Bride Event
//  Our philosophy is one which advocates personalisation, attention to detail and a seamless wedding planning process.We pride ourselves in delivering top class service together with an exceptional product.

//  7)- Theme Based
// At Lahar event we provide various event on various theme based also where we take care of almost everything regarding the theme and make your theme based event a memorable one.

// 8)- Proposal Suprise
//  Suprise your partner with an amazing and beautiful decoration by Lahar events to increase the assurity to being together and forever.
// Hurry up..

// 9)- Baby Shower
// We suggest unique themes and invites decide on the games and activities to make it entertaining and assist in thoughtful gifts and goodie for the friends and family.
