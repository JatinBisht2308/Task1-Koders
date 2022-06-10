import React from 'react';
import './GalleryPart.css';
import { v4 as uuidv4 } from 'uuid';
// import img1 from '../../images/25anniversary_1.jpg';
// import img2 from '../../images/25anniversary_2.jpg';
// import img3 from '../../images/25anniversary_3.jpg';
// import img4 from '../../images/25anniversary_4.jpg';

function GalleryPart({ images, name, text }) {

    let img_array = images;
    var slideIndex = 1;

    const showSlides = (n) => {
        var i;
        var slides = document.getElementsByClassName(name);
        if(n > slides.length) {
            slideIndex = 1;
        }
        if(n<1) {
            slideIndex = slides.length;
        }
        for(i=0; i<slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex-1].style.display = "block";
    }

    const openModal = () => {
        document.querySelector(`.${name}Slide`).style.display = "block";
        showSlides(slideIndex);
    }  

    const closeModal = () => {
        document.querySelector(`.${name}Slide`).style.display = "none";
    }

    const plusSlides = (n) => {
        showSlides(slideIndex += n);
    }

  return (
    <div className='GalleryPart'>
        <div className="GalleryPart_container">
            <img src={img_array[0]} alt="" onClick={openModal} />
            <h4>{text}</h4>
        </div>
        <div className={`slideshow_container ${name}Slide`}>
            <span className="close" onClick={closeModal}>&times;</span>
            <div className="container_content">
            {
                img_array.map((imag, idx) => {
                    return (
                        <div key={uuidv4()} className={`mySlides fading ${name}`}>
                            <div className="numbertext">{`${idx+1}/${img_array.length}`}</div>
                            <img src={imag} style={{width: "60%"}} alt="" />
                            <div className="text">{text}</div>
                        </div>
                    )
                })
            }
            
            </div>
            <a onClick={() => plusSlides(-1)} className="prev">&#10094;</a>
            <a onClick={() => plusSlides(1)} className="next">&#10095;</a>
        </div>
    </div>
  )
}

export default GalleryPart