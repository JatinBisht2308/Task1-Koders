import logo from './logo.png';
import home_image from './images/home_image.jpeg'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import LandingScreen from './components/LandingScreen/LandingScreen';
import Categories from './components/Categories/Categories';
import Testimonial from './components/Testimonial/Testimonial';
import Footer from './components/Footer/Footer'
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services'
import GalleryPage from './components/GalleryPage/GalleryPage';
import Home from './components/Home/Home';
import ServiceDesc from './components/ServiceDesc/ServiceDesc';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
          exact
          path={"/"}
          element ={<Home />}
          />
          <Route
          path={"/about"}
          element ={<About />} />
          <Route
          path={"/gallery"}
          element ={<GalleryPage />} />
          <Route
          path={"/contact"}
          element ={<Contact/>} />
          <Route
          path={"/services"}
          element ={<Services/>} />
          <Route
          path={"/servicedescription"}
          element ={<ServiceDesc/>} />
        </Routes>
      </BrowserRouter>
      {/* <Contact /> */}
      {/* <GalleryPage /> */}
      {/* <About/> */}
      {/* <Services /> */}
    </div>
  );
}

export default App;
