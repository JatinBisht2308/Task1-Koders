import React from "react";
import "./Categories.css";
import CategorieCard from "../CategoryCard/CategoryCard";
import "animate.css";
import AOS from "aos";
import { useNavigate } from 'react-router-dom';
import imgsrc1 from "../../images/25anniversary_1.webp";
import imgsrc2 from "../../images/birthday_1.webp";
import imgsrc3 from "../../images/mundan_1.webp";

function Categories() {

  let nav = useNavigate();

  AOS.init({
    duration: 1000
  });

  const handleClick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    nav('/services');
  }

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
            <button onClick={handleClick}>see all</button>
          </div>
        </div>
        <div className="Category_cards">
          <CategorieCard heading="WEDDING EVENTS" imgsrc={imgsrc1} />
          <CategorieCard heading="BIRTHDAY EVENTS" imgsrc={imgsrc2} />
          <CategorieCard heading="CORPORATE EVENTS" imgsrc={imgsrc3} />
        </div>
      </div>
    </div>
  );
}

export default Categories;
