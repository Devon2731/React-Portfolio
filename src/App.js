// import React, { useState } from 'react';
import Navbar from './components/Navbar'; 
import HeroSection from './components/HeroSection'; 
import About from './components/About';
import CVSection from './components/CvSection';
import SkillsSection from './components/SkillsSection';
import Footer from './components/Footer'; 
import PortfolioSection from './components/PortfolioSection';
import './App.css';


function App() {
  // const [isSomeConditionMet, setIsSomeConditionMet] = useState(false);
  return (
    <div>
      <Navbar />

      <HeroSection />
      <SkillsSection />
      <PortfolioSection />
      <About />
      <CVSection />

      <Footer />
    </div>
  );
}

export default App;