import React from "react";
import "./Categories.css";
import CategorieCard from "../CategoryCard/CategoryCard";
import "animate.css";
import AOS from "aos";

function Categories() {
  AOS.init({
    duration: 1000
  });
  return (
    <div className="Categories">
      <div className="Categories_container">
        <div className="Categories_desc">
          <div
            className="Categories_desc_container"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            <h1>EVENT CATEGORIES</h1>
            <p>
              Here are some of our most asked events in present time. Please
              check these out...
            </p>
            <button>see all</button>
          </div>
        </div>
        <div className="Category_cards">
          <CategorieCard heading="WEDDING EVENTS" />
          <CategorieCard heading="BIRTHDAY EVENTS" />
          <CategorieCard heading="CORPORATE EVENTS" />
        </div>
      </div>
    </div>
  );
}

export default Categories;
