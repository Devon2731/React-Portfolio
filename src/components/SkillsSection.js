import React from 'react';
import SkillsSection from './styles/SkillsSection.css';


const SkillsSection = () => {
  return (
    <section className="container py-5" id="skills">
      <div className="row mt-4 py-3">
        <div className="col-12 d-flex flex-column text-center justify-content-center">
          <h2>SKILLS</h2>
          <h5 className="text-secondary fw-normal py-2 fst-italic">Continuously improving my skills and knowledge in the field.</h5>
        </div>
      </div>
      <div className="row d-flex justify-content-between mx-0">
        <div className="card mt-5 d-flex flex-column align-items-center text-center bg-white p-4" style={{ width: "25rem" }}>
          <i className="text-white bg-primary d-flex align-items-center justify-content-center fs-2 rounded-circle fa-solid fa-cart-shopping"></i>
          <h3 className="mt-4 h4">Front-end Development</h3>
          <p className="text-center">Proficient in HTML, CSS, and JavaScript. Experienced in responsive web design, and building user-friendly interfaces.</p>
        </div>
        <div className="card mt-5 d-flex flex-column align-items-center text-center bg-white p-4" style={{ width: "25rem" }}>
          <i className="text-white bg-primary d-flex align-items-center justify-content-center fs-2 rounded-circle fa-solid fa-laptop"></i>
          <h3 className="mt-4 h4">Back-end Development</h3>
          <p className="text-center">Learning more on server-side programming using technologies like Node.js and Express.</p>
        </div>
        {/* Add or remove additional skill cards as needed */}
      </div>
    </section>
  );
}

export default SkillsSection;
