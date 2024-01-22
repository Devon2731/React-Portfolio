import React from 'react';
import CurriculumVitaeSection from './styles/cvSection.css';
import IMG_2138 from './assets/IMG_2138.jpeg';

const CurriculumVitaeSection = () => {
  return (
    <section className="container py-5" id="cv">
      <div className="row mt-4 py-3">
        <div className="col-12 d-flex flex-column text-center">
          <h2>CURRICULUM VITAE</h2>
          <h5 className="text-secondary fw-normal py-2 fst-italic">A small sampling of some of the projects I've worked on as a student of the University of Richmond Full-Stack Developer Bootcamp.</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 mt-5 order-lg-0 order-1 text-center">
          <img className="img-fluid rounded-circle border border-5 border-dark-subtle" src={IMG_2138} alt="profile-img" />
          <h2 className="mt-3">Devon Whitaker</h2>
          <ul className="list-unstyled contact-info">
            <li><i className="fas fa-envelope me-2"></i> devon.whitaker27@gmail.com</li>
            <li><i className="fas fa-phone me-2"></i> 757-202-7700</li>
            <li><i className="fas fa-map-marker-alt me-2"></i> 3808 Cranberry Ct, Virginia Beach,VA 23456 </li>
          </ul>
          <ul className="social-icons my-5 d-flex justify-content-center">
            {/* Add your social media links here */}
          </ul>
          <h5>Technical Skills</h5>
          <ul className="list-unstyled">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            {/* Add or remove skills as needed */}
          </ul>
        </div>
        <div className="col-lg-7 order-lg-1 order-0 mt-5 text-start">
          <h3>Profile</h3>
          <hr />
          <p>I am a dedicated person with a self-starter attitude. I am the type of person that you would want on your team because I get the job done. I always zero in on the project at hand and focus on the little details. I don't crack under pressure and I'm used to completing tasks within a short amount of time. I am a personable person who is always willing to help others with their problems. I'm always earger to learn new things from others that will help in me in the long run. Optimistically, I always look at the glass as half full instead of half empty. I demonstrate an entrepreneurial spirit by taking the initiative to get things done. My professional and educational experiences have provided me with excellent computer skills.</p>

          {/* Add the rest of your CV content using appropriate Bootstrap components and classes */}
          
          {/* Example:
          <h3>Highlights of Qualifications</h3>
          <hr />
          <ul>
            <li>Qualification 1</li>
            <li>Qualification 2</li>
            <li>Qualification 3</li>
          </ul>

          <h3>Education</h3>
          <hr />
          <dl>
            <dt>Year - Year</dt>
            <dd>University/Institution</dd>
            <dd>Degree/Program</dd>
          </dl>

          <h3>Courses & Training</h3>
          <hr />
          <dl>
            <dt>Current</dt>
            <dd>Full-stack Web Developer Bootcamp</dd>
            <dd>University of Richmond</dd>
          </dl>
          */}
        </div>
      </div>
    </section>
  );
}

export default CurriculumVitaeSection;
