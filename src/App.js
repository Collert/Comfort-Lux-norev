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
import React from 'react';

function App() {

  const [visibleSections, setVisibleSections] = React.useState({
    hero:false,
    about:false,
    services:false,
    gallery:false,
    whyUs:false,
    workWithUs:false,
    contact:false
  })

  return (
    <>
      <Header visibleSections={visibleSections}/>
      <Hero setVisibleSections={setVisibleSections}/>
      <AboutUs setVisibleSections={setVisibleSections}/>
      <FloatingBullets setVisibleSections={setVisibleSections}/>
      <Gallery setVisibleSections={setVisibleSections}/>
      <WhyUs setVisibleSections={setVisibleSections}/>
      <WorkWithUs setVisibleSections={setVisibleSections}/>
      <Contact setVisibleSections={setVisibleSections}/>
    </>
  )
}

export default App;
