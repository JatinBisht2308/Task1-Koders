import { Suspense, lazy } from "react";
import services_image from "../../images/services_final.jpg";
import "./Services.css";
import "animate.css";
import AOS from "aos";

const Navbar = lazy(() => import("../Navbar/Navbar"));
const Footer = lazy(() => import("../Footer/Footer"));
const LandingScreen = lazy(() => import("../LandingScreen/LandingScreen"));
const Events = lazy(() => import("../Events/Events"));

function Services() {
  AOS.init();
  return (
    <div
      className="Services"
      data-aos="fade-right"
      data-aos-delay="200"
    >
      <Suspense fallback={<div>Loading...</div>}><Navbar /></Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <LandingScreen
        className="services__landingscreen"
        imgsrc={services_image}
        title="OUR SERVICES"
        desc="We provide the best services to make your event memorable, we offer quality services that go a long way to ensuring that your requirements are well meet."
        isButton="true"
      />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}><Events /></Suspense>
      <Suspense fallback={<div>Loading...</div>}><Footer /></Suspense>
    </div>
  );
}

export default Services;
