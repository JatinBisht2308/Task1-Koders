import React from "react";
import GalleryCard from "../GalleryCard/GalleryCard";
import "./Gallery.css";
import  { AiOutlineArrowRight } from 'react-icons/ai';

function Gallery() {
  return (
    <div className="Gallery">
      <div className="Gallery_container">
        <h1>GALLERY</h1>
        <div className="gallery_cards">
          <GalleryCard />
          <GalleryCard />
          <GalleryCard />
        </div>
        <button>view all <AiOutlineArrowRight style={{ verticalAlign: 'middle' }} /></button>
      </div>
    </div>
  );
}

export default Gallery;
