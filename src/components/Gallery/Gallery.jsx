import React from "react";
import { Suspense, lazy } from "react";
import "./Gallery.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import "animate.css";
import AOS from "aos";
import { useNavigate } from 'react-router-dom';
import roomdecor from "../../images/roomdecor_1.webp";
import babyshower from "../../images/babyshower_1.webp";
import bridalshower from "../../images/bridalshower_1.webp";
const GalleryCard = lazy(() => import("../GalleryCard/GalleryCard"));

function Gallery() {
  let nav = useNavigate();
  AOS.init();

  const handleClick = () => {
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
    nav('/gallery');
  }

  return (
    <div className="Gallery">
      <div className="Gallery_container">
        <h1 data-aos="fade-down" data-aos-delay="200">
          GALLERY
        </h1>
        <div className="gallery_cards">
          <Suspense fallback={<div>loading...</div>}><GalleryCard title="Room Decorations" imgsrc={roomdecor} /></Suspense>
          <Suspense fallback={<div>loading...</div>}><GalleryCard title="Baby Shower" imgsrc={babyshower} /></Suspense>
          <Suspense fallback={<div>loading...</div>}><GalleryCard title="Bridal Shower" imgsrc={bridalshower}/></Suspense>
        </div>
        <button onClick={handleClick} >
          view all <AiOutlineArrowRight style={{ verticalAlign: 'middle' }} />
        </button>
      </div>
    </div>
  );
}

export default Gallery;
