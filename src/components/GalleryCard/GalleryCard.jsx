import React from "react";
import "./GalleryCard.css";
import gallery_card from "../../images/gallery_card.jpeg";
import "animate.css";
import AOS from "aos";

function GalleryCard() {
  return (
    <div
      className="GalleryCard"
      data-aos="flip-up"
      data-aos-delay='200'
    >
      <div className="GalleryCard_container">
        <img src={gallery_card} alt="" />
        <div className="gallery_card_desc">Flower Wedding Decoration</div>
      </div>
    </div>
  );
}

export default GalleryCard;
