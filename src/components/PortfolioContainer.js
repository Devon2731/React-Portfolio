import React, { useState } from 'react';
import Navbar from './Navbar'; 
import HeroSection from './HeroSection'; 
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Work from './pages/Work';
import Footer from './Footer'; 


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Work') {
      return <Work />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <HeroSection />
      {renderPage()}
      <Footer />
    </div>
  );
}