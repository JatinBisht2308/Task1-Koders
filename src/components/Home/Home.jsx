import React, { useState, useEffect, Suspense, lazy } from "react";
import home_image from "../../images/home_image.webp";
import Gallery from "../Gallery/Gallery";
const Navbar = lazy(() => import("../Navbar/Navbar"));
const Categories = lazy(() => import("../Categories/Categories"));
const Testimonial = lazy(() => import("../Testimonial/Testimonial"));
const Footer = lazy(() => import("../Footer/Footer"));
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
          <Suspense fallback={<div>Loading...</div>}><Navbar /></Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <LandingScreen
              imgsrc={home_image}
              title="WE MAKE EVENTS MEMORABLE"
              desc="Good design is making something intelligible and memorable. Great design is making something memorable and meaningful.Explore our events.."
              isButton="true"
            />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}><Categories /></Suspense>
          <Suspense fallback={<div>Loading...</div>}><Gallery /></Suspense>
          <Suspense fallback={<div>Loading...</div>}><Testimonial /></Suspense>
          <Suspense fallback={<div>Loading...</div>}><Footer /></Suspense>
        </div>
      )}
    </div>
  );
}

export default Home;
