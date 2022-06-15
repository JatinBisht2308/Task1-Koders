import React from "react";
import "./EventsCard.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import "animate.css";
import AOS from "aos";

const EventsCard = ({ imgsrc, title, delayInEvents }) => {
  AOS.init();
  return (
    //   holds the image with the heading of the respective event
    <Link to={"/services/"+title} style={{textDecoration: "none"}}>
      <div
        className="EventsCard"
        data-aos="fade-up"
        data-aos-delay={delayInEvents}
      >
        {/* holds the image */}
        <div className="event_card_image">
          <img src={imgsrc} alt="" />
        </div>
        {/* holds the heading of the event card */}
        <div className="event_card_desc">
          <div className="heading">
            <h3>{title}</h3>
          </div>
          <div className="arrow">
            <AiOutlineArrowRight style={{color: 'black'}} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventsCard;
