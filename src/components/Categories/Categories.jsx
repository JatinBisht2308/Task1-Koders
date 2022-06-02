import React from "react";
import "./Categories.css";
import CategorieCard from "../CategoryCard/CategoryCard";

function categories() {
  return (
    <div className="Categories">
      <div className="Categories_container">
        <div className="Categories_desc">
          <div className="Categories_desc_container">
            <h1>EVENT CATEGORIES</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              similique atque rerum voluptatum
            </p>
            <button>see all</button>
          </div>
        </div>
        <div className="Category_cards">
          <CategorieCard heading="WEDDING EVENTS"/>
          <CategorieCard heading="BIRTHDAY EVENTS"/>
          <CategorieCard heading="CORPORATE EVENTS"/>
        </div>
      </div>
    </div>
  );
}

export default categories;
