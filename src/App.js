import logo from './logo.png';
import home_image from './images/home_image.webp'
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
import ServiceDesc from './components/ServiceDesc/ServiceDesc';
import { Suspense,lazy } from 'react';
import ServiceDescSetter from './components/ServiceDescSetter/ServiceDescSetter';
const Home = lazy(()=>import('./components/Home/Home'))
// import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
          exact
          path={"/"}
          element ={<Suspense fallback={<div>Loading...</div>} ><Home /></Suspense>}
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
          path={"/services/:id"}
          element ={<ServiceDescSetter/>} />
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
