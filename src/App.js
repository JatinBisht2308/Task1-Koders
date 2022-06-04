import logo from './logo.png';
import home_image from './images/home_image.jpeg'
import './App.css';
// import Navbar from './components/Navbar/Navbar';
// import LandingScreen from './components/LandingScreen/LandingScreen';
// import Categories from './components/Categories/Categories';
// import Testimonial from './components/Testimonial/Testimonial';
// import Footer from './components/Footer/Footer'
// import Gallery from './components/Gallery/Gallery';
// import About from './components/About/About'
import Services from './components/Services/Services'

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <LandingScreen imgsrc={home_image}  title="WE MAKE EVENTS MEMORABLE" desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque iusto est ut exercitationem ex nobis dolorem magnam nesciunt enim a!" isButton="true"/>
      <Categories />
      <Gallery />
      <Testimonial />
      <Footer /> */}
      {/* <About/> */}
      <Services />
    </div>
  );
}

export default App;
