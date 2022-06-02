import React from "react";
import "./CategoryCard.css";
import category_image from '../../images/category_card.jpeg';

function CategoryCard(props) {
  return (
    <div className="CategoryCard">
      <div className="CategoryCard_container">
        <img src={category_image} alt="" />
        <h5>{props.heading}</h5>
      </div>
    </div>
  );
}    

export default CategoryCard;
