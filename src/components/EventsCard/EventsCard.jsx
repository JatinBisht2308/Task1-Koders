import React from "react";
import "./EventsCard.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const EventsCard = ({ imgsrc, title }) => {
  return (
    //   holds the image with the heading of the respective event
    <div className="EventsCard">
      {/* holds the image */}
      <div className="event_card_image">
        <img src={imgsrc} alt="" />
      </div>
      {/* holds the heaading of the event card */}
      <div className="event_card_desc">
        <div className="heading">
          <h3>{title}</h3>
        </div>
        <div className="arrow">
          <a href="">
            <AiOutlineArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
