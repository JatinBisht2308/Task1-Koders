import React from 'react';
import './GalleryPart.css';
import img1 from '../../images/25anniversary_1.jpg';
import img2 from '../../images/25anniversary_2.jpg';
import img3 from '../../images/25anniversary_3.jpg';
import img4 from '../../images/25anniversary_4.jpg';

function GalleryPart() {

    const img_array = [img1, img2, img3, img4];
    var slideIndex = 1;

    

    const showSlides = (n) => {
        var i;
        var slides = document.getElementsByClassName("mySlides");
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
        document.getElementById('slideshow_container').style.display = "block";
        showSlides(slideIndex);
        
    }

    const closeModal = () => {
        document.getElementById('slideshow_container').style.display = "none";
    }

    const plusSlides = (n) => {
        showSlides(slideIndex += n);
    }

    

  return (
    <div className='GalleryPart'>
        <div className="GalleryPart_container">
            <img src={img1} alt="" onClick={openModal} />
            <h4>25th Anniversary</h4>
        </div>
        <div className="slideshow_container" id='slideshow_container'>
            <span className="close" onClick={closeModal}>&times;</span>
            <div className="container_content">
            {
                img_array.map((imag, idx) => {
                    return (
                        <div id={idx} className="mySlides fade">
                            <div className="numbertext">{`${idx+1}/${img_array.length}`}</div>
                            <img src={imag} style={{width: "60%"}} alt="" />
                            <div className="text">25th anniversary</div>
                        </div>
                    )
                })
            }
            <a onClick={() => plusSlides(-1)} className="prev">&#10094;</a>
            <a onClick={() => plusSlides(1)} className="next">&#10095;</a>
            </div>
        </div>
    </div>
  )
}

export default GalleryPart