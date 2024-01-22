import React from 'react';
import About from './styles/About.css';

const About = () => {
    return (
        <section className="container py-5" id="about">
        <div className="row mt-4 py-3">
          <div className="col-12 d-flex flex-column text-center">
            <h2>ABOUT</h2>
            <h5 className="text-secondary fw-normal py-2 fst-italic">Learn more about me, my background, and what motivates me.</h5>
          </div>
        </div>
        <div className="row flex-row-reverse flex-md-row mt-5 pt-5">
          <div className="col-9 col-md-5 text-md-end">
            <h5>2023-Present</h5>
            <h5>The learning of Web Development</h5>
            <p>Since the beginning of the summer of 2023, I became fascinated with computers and programming. Now I'm taking my boot camp class learning full-stack development. Starting with Front-End learning HTML, CSS, and JavaScript, and now learning Back-end starting with Node.JS.</p>
          </div>
          <div className="col-3 col-md-2 img text-center">
            <img className="rounded-circle border border-5 border-dark-subtle img-fluid" src="./assets/best-coding-language-for-games.jpg" alt="img" />
          </div>
        </div>
        <div className="row justify-content-md-end mt-5 pt-5">
          <div className="col-3 col-md-2 img text-center">
            <img className="rounded-circle border border-5 border-dark-subtle img-fluid" src="./assets/photo-1587620962725-abab7fe55159.jpg" alt="img" />
          </div>
          <div className="col-9 col-md-5">
            <h5>Future</h5>
            <h5>Continuing to Make a Difference</h5>
            <p>I am committed to leveraging my skills and expertise to contribute to meaningful projects that have a positive impact on society. I am eager to take on new challenges and collaborate with talented individuals to create innovative solutions.</p>
          </div>
        </div>
      </section>
    );
}

export default About;