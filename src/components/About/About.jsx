import home_image from "../../images/Haldi-wide.JPG.webp";
import "./About.css";
import { Suspense, lazy } from "react";
import "animate.css";
import AOS from "aos";
const Navbar = lazy(() => import("../Navbar/Navbar"));
const LandingScreen = lazy(() => import("../LandingScreen/LandingScreen"));
const Footer = lazy(() => import("../Footer/Footer"));
const Story = lazy(() => import("../Story/Story"));
const Serve = lazy(() => import("../Serve/Serve"));

function About() {
  AOS.init();
  return (
    <div className="About" data-aos="fade-right" data-aos-delay="200">
      <Suspense fallback={<div>loading...</div>}><Navbar /></Suspense>
      <Suspense fallback={<div>loading...</div>}>
      <LandingScreen
        imgsrc={home_image}
        title="ABOUT LAHAR EVENTS"
        desc="We provide the best services to make your event memorable, we offer quality services that go a long way to ensuring that your requirements are well meet.Creativity and innovation is to events, what the heart & soul is to the living."
        isButton="false"
      />
      </Suspense>
      <Suspense fallback={<div>loading...</div>}><Story /></Suspense>
      <Suspense fallback={<div>loading...</div>}><Serve /></Suspense>
      <Suspense fallback={<div>loading...</div>}><Footer /></Suspense>
    </div>
  );
}

export default About;
