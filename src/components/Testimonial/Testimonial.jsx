import React from "react";
import "./Testimonial.css";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import AVTR1 from "../../images/avatar3.jpg";
function Testimonial() {
  return (
    <section className="Testimonial">
      <div className="heading__testimonial">
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>
      </div>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="" />
          </div>
          <h2 className="client__name">Jatin Bisht</h2>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium, quasi ad corporis, consectetur harum suscipit illum
            nostrum doloremque animi dicta aliquam quis eos optio ex dolore at
            qui vitae adipisci?
            <p classname="hide_testi">
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              quae quaerat facere qui, voluptas totam! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Tempora asperiores amet unde in
              autem animi."
            </p>
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="" />
          </div>
          <h2 className="client__name">Jatin Bisht</h2>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium, quasi ad corporis, consectetur harum suscipit illum
            nostrum doloremque animi dicta aliquam quis eos optio ex dolore at
            qui vitae adipisci?
            <p classname="hide_testi">
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              quae quaerat facere qui, voluptas totam! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Tempora asperiores amet unde in
              autem animi "
            </p>
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="" />
          </div>
          <h2 className="client__name">Jatin Bisht</h2>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium, quasi ad corporis, consectetur harum suscipit illum
            nostrum doloremque animi dicta aliquam quis eos optio ex dolore at
            qui vitae adipisci?
            <p classname="hide_testi">
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              quae quaerat facere qui, voluptas totam! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Tempora asperiores amet unde in
              autem animi ".
            </p>
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Testimonial;
