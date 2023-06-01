import './App.css';
import './style.css';
import Header from './components/Header';
import Hero from './components/Hero';
import FloatingBullets from './components/FloatingBullets';
import Gallery from './components/Gallery';
import AboutUs from './components/AboutUs';
import WhyUs from './components/WhyUs';
import WorkWithUs from './components/workWithUs/WorkWithUs';
import Contact from './components/Contact';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import MobileHeader from './components/MobileHeader';
import Reviews from './components/reviews/Reviews';

function App() {

  const isPortrait = useMediaQuery({query: "(orientation: portrait)"})

  const [visibleSections, setVisibleSections] = React.useState({
    hero:false,
    about:false,
    services:false,
    gallery:false,
    whyUs:false,
    reviews:false,
    workWithUs:false,
    contact:false
  })

  return (
    <>
      {isPortrait ? 
      <MobileHeader visibleSections={visibleSections}/>
      :
      <Header visibleSections={visibleSections}/>
      }
      <Hero setVisibleSections={setVisibleSections}/>
      <AboutUs setVisibleSections={setVisibleSections}/>
      <FloatingBullets setVisibleSections={setVisibleSections}/>
      <Gallery setVisibleSections={setVisibleSections}/>
      <WhyUs setVisibleSections={setVisibleSections}/>
      <Reviews setVisibleSections={setVisibleSections}/>
      <WorkWithUs isPortrait={isPortrait} setVisibleSections={setVisibleSections}/>
      <Contact setVisibleSections={setVisibleSections}/>
    </>
  )
}

export default App;
