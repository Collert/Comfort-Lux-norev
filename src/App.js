import './App.css';
import './style.css';
import Header from './components/Header';
import Hero from './components/Hero';
import FloatingBullets from './components/FloatingBullets';
import Gallery from './components/Gallery';
import AboutUs from './components/AboutUs';
import WhyUs from './components/WhyUs';
import WorkWithUs from './components/WorkWithUs';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <AboutUs/>
      <FloatingBullets/>
      <Gallery/>
      <WhyUs/>
      <WorkWithUs/>
      <Contact/>
    </>
  )
}

export default App;
