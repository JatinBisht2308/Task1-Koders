import React from 'react';
import './GalleryCard.css';
import gallery_card from '../../images/gallery_card.jpeg';

function GalleryCard() {
  return (
    <div className='GalleryCard'>
        <div className="GalleryCard_container">
            <img src={gallery_card} alt="" />
            <div className="gallery_card_desc">Flower Wedding Decoration</div>
        </div>
    </div>
  )
}

export default GalleryCard