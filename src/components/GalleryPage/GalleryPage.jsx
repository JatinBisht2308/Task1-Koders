import React from 'react';
import LandingScreen from '../LandingScreen/LandingScreen';
import Navbar from '../Navbar/Navbar';
import './GalleryPage.css';
import gallery_main from '../../images/gallery_main.jpeg';
import Footer from '../Footer/Footer';
import GalleryPart from '../GalleryPart/GalleryPart';

function GalleryPage() {
  return (
    <div className='GalleryPage'>
        <Navbar />
        <LandingScreen title="Gallery" imgsrc={gallery_main} desc="Memorable events don’t just happen. They happen to be our busines" />
        <div className="gallery_section">
        <GalleryPart />
        <GalleryPart />
        <GalleryPart />
        <GalleryPart />
        <GalleryPart />
        <GalleryPart />
        </div>
        <Footer />
    </div>
  )
}

export default GalleryPage