import logo from "../../logo.png";
import services_image from "../../images/services_bg3.jpg";
import "./Services.css";
import Navbar from "../Navbar/Navbar";
import LandingScreen from "../LandingScreen/LandingScreen";
import Testimonial from "../Testimonial/Testimonial";
import Footer from "../Footer/Footer";
import Events from "../Events/Events";
import Serve from "../Serve/Serve";
import Story from "../Story/Story";

function Services() {
  return (
    <div className="Services">
      <Navbar />
      <LandingScreen
        imgsrc={services_image}
        title="Our Services"
        desc="We provide the best services to make your event memorable, we offer quality services that go a long way to ensuring that your requirements are well meet."
        isButton="true"
      />
      <Events />
      <Testimonial />
      <Story />
      <Serve />
      <Footer />
    </div>
  );
}

export default Services;
