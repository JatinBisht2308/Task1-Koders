import logo from '../../logo.png';
import home_image from '../../images/about-us-background.jpg';
import './About.css';
import Navbar from '../Navbar/Navbar';
import LandingScreen from '../LandingScreen/LandingScreen';
import Footer from '../Footer/Footer'
import Story from '../Story/Story'
import Serve from '../Serve/Serve'
function About() {
  return (
    <div className="About">
      <Navbar />
      <LandingScreen imgsrc={home_image}  title="ABOUT LAHAR EVENTS" desc="We provide the best services to make your event memorable, we offer quality services that go a long way to ensuring that your requirements are well meet." isButton="false"/>
      <Story />
      <Serve />
      <Footer />
    </div>
  );
}

export default About;