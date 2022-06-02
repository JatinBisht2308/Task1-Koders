import logo from './logo.png';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import LandingScreen from './components/LandingScreen/LandingScreen';
import Categories from './components/Categories/Categories';
import Testimonial from './components/Testimonial/Testimonial';
import Gallery from './components/Gallery/Gallery';
function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingScreen />
      <Categories />
      <Gallery />
      <Testimonial />
    </div>
  );
}

export default App;
