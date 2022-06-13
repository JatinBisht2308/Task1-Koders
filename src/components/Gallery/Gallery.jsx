import React from "react";
import GalleryCard from "../GalleryCard/GalleryCard";
import "./Gallery.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import "animate.css";
import AOS from "aos";

function Gallery() {
  AOS.init();
  return (
    <div className="Gallery">
      <div className="Gallery_container">
        <h1 data-aos="fade-down" data-aos-delay="200">
          GALLERY
        </h1>
        <div className="gallery_cards">
          <GalleryCard />
          <GalleryCard />
          <GalleryCard />
        </div>
        <button>
          view all <AiOutlineArrowRight style={{ verticalAlign: "middle" }} />
        </button>
      </div>
    </div>
  );
}

export default Gallery;
