import React from "react";
import home_image from '../../images/home_image.jpeg';
import Navbar from '../Navbar/Navbar';
import LandingScreen from '../LandingScreen/LandingScreen';
import Categories from '../Categories/Categories';
import Testimonial from '../Testimonial/Testimonial';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <LandingScreen
        imgsrc={home_image}
        title="WE MAKE EVENTS MEMORABLE"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque iusto est ut exercitationem ex nobis dolorem magnam nesciunt enim a!"
        isButton="true"
      />
      <Categories />
      <Gallery />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default Home;
