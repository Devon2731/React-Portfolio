import React from 'react';
import HeroSection from './styles/heroSection.css'; // 

function HeroSection() {
  return (
    <section className="hero d-flex flex-column align-items-center justify-content-center">
    <div className="text-center">
      <h1 className="h1 text-black fw-medium fst-italic">Devon Whitaker</h1>
      <h2 className="display-3 text-black fw-bold">Full-Stack Web Developer <br /> Student</h2>
      <a href="#skills" className="btn btn-lg fs-6 fw-medium mt-5 btn-primary p-3">TELL ME MORE</a>
    </div>
  </section>
  );
}

export default HeroSection;