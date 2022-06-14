import React from "react";
import "./GalleryCard.css";
import "animate.css";
import AOS from "aos";

function GalleryCard(props) {
  AOS.init();
  return (
    <div
      className="GalleryCard"
      data-aos="flip-up"
      data-aos-delay='200'
    >
      <div className="GalleryCard_container">
        <img src={props.imgsrc} alt="" />
        <div className="gallery_card_desc">{props.title}</div>
      </div>
    </div>
  );
}

export default GalleryCard;
