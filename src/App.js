import React, { useState } from 'react';
import Navbar from './Navbar'; 
import HeroSection from './HeroSection'; 
import About from './About';
import CVSection from './CVSection';
import SkillsSection from './SkillsSection';
import Footer from './Footer'; 
import PortfolioSection from './PortfolioSection';
import './App.css';


export default function App() {
  const [isSomeConditionMet, setIsSomeConditionMet] = useState(false);
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