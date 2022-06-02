import React from "react";
import "./Testimonial.css";
import {
  BsArrowRightCircle,
  BsArrowLeftCircle,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/bs";
import { IconContext } from "react-icons";
function Testimonial() {
  return (
    <div>
      <div className="Testimonial">
        <div className="Testimonial_container">
          <h2>TESTIMONIALS</h2>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            earum maxime, non corrupti ex aperiam deleniti molestias sunt! Animi
            minus ipsum in laboriosam nesciunt. Officiis dolorum animi et ipsam
            reprehenderit maxime voluptatem dolore voluptates!
          </p>
          <p className="user">- Lorem Ipsum</p>
          <div className="button">
            <IconContext.Provider
              value={{ color: "#CD9F58", className: "btn", size: "2em" }}
            >
              <BsArrowLeftCircle />
            </IconContext.Provider>

            <IconContext.Provider
              value={{ color: "#CD9F58", className: "btn", size: "2em" }}
            >
              <BsArrowRightCircle />
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
