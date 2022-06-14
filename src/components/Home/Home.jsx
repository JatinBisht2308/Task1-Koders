import React, { useState, useEffect, Suspense, lazy } from "react";
import home_image from "../../images/home_image.webp";
import Navbar from "../Navbar/Navbar";
// import LandingScreen from "../LandingScreen/LandingScreen";
import Categories from "../Categories/Categories";
import Testimonial from "../Testimonial/Testimonial";
import Footer from "../Footer/Footer";
import Gallery from "../Gallery/Gallery";
// import SplashScreen from "../SplashScreen/SplashScreen";
const LandingScreen = lazy(() => import("../LandingScreen/LandingScreen"));
const SplashScreen = lazy(() => import("../SplashScreen/SplashScreen"));

function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="Home">
      {loading ? (
             <Suspense fallback={<div>Loading...</div>}>  <SplashScreen /></Suspense>
      

      ) : (
        <div className="mainContainer">
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <LandingScreen
              imgsrc={home_image}
              title="WE MAKE EVENTS MEMORABLE"
              desc="Good design is making something intelligible and memorable. Great design is making something memorable and meaningful.Explore our events.."
              isButton="true"
            />
          </Suspense>
          <Categories />
          <Gallery />
          <Testimonial />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Home;
