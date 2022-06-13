import logo from "../../logo.png";
import services_image from "../../images/services_final.jpg";
import "./Services.css";
import Navbar from "../Navbar/Navbar";
import LandingScreen from "../LandingScreen/LandingScreen";
import Testimonial from "../Testimonial/Testimonial";
import Footer from "../Footer/Footer";
import Events from "../Events/Events";
import Serve from "../Serve/Serve";
import Story from "../Story/Story";
import "animate.css";
import AOS from "aos";

function Services() {
  AOS.init();
  return (
    <div
      className="Services"
      data-aos="fade-right"
      data-aos-delay="200"
    >
      <Navbar />
      <LandingScreen
        className="services__landingscreen"
        imgsrc={services_image}
        title="OUR SERVICES"
        desc="We provide the best services to make your event memorable, we offer quality services that go a long way to ensuring that your requirements are well meet."
        isButton="true"
      />
      <Events />
      <Footer />
    </div>
  );
}

export default Services;
