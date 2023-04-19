import './App.css';
import './style.css';
import Header from './components/Header';
import Hero from './components/Hero';
import FloatingBullets from './components/FloatingBullets';
import Gallery from './components/Gallery';
import AboutUs from './components/AboutUs';
import WhyUs from './components/WhyUs';

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <AboutUs/>
      <FloatingBullets/>
      <Gallery/>
      <WhyUs/>
    </>
  )
}

export default App;
