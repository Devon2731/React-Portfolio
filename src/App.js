import React, { useState } from 'react';
import Navbar from './Navbar'; 
import HeroSection from './HeroSection'; 
import About from './About';
import CVSection from './CVSection';
import SkillsSection from './SkillsSection';
import Footer from './Footer'; 


export default function App() {
  const [isSomeConditionMet, setIsSomeConditionMet] = useState(false);
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <CVSection />
      <SkillsSection />
      <Footer />
    </div>
  );
}