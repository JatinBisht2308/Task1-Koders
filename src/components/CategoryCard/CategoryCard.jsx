import React from "react";
import "./CategoryCard.css";
import category_image from "../../images/category_card.jpeg";
import "animate.css";
import AOS from "aos";

function CategoryCard(props) {
  AOS.init({
    duration: 1000
  });
  return (
    <div className="CategoryCard" data-aos="fade-up" data-aos-delay="100">
      <div className="CategoryCard_container">
        <img src={category_image} alt="" />
        <h5>{props.heading}</h5>
      </div>
    </div>
  );
}

export default CategoryCard;
