import './App.css';
import './style.css';
import Header from './components/Header';
import Hero from './components/Hero';
import FloatingBullets from './components/FloatingBullets';
import Gallery from './components/Gallery';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <>
      <Header/>
      <span className='nav-anchor' id='hero-nav'/>
      <Hero/>
      <span className='nav-anchor' id='about-us-nav'/>
      <AboutUs/>
      <span className='nav-anchor' id='five-bullet-points-nav'/>
      <FloatingBullets/>
      <span className='nav-anchor' id='gallery-nav'/>
      <Gallery/>
    </>
  )
}

export default App;
