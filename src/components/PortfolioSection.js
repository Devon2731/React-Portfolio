import React from "react";
import PortfolioSection from "./PortfolioSection.css";


const PortfolioSection = () => {
    return (
        <section className="container py-5" id="portfolio">
        <div className="row mt-4 py-3">
          <div className="col-12 d-flex flex-column text-center justify-content-center">
            <h2>PORTFOLIO</h2>
            <h5 className="text-secondary fw-normal py-2 fst-italic">A collection of projects I've worked on.</h5>
          </div>
        </div>
        <div className="row mt-5 mx-0 justify-content-center align-items-center">
          <div className="col-lg-3 px-md-3 px-0 col-md-4 col-12 card-wrapper">
            <a className="card mt-4"  href="http://nightin-lineup.onrender.com">
              <img src="./assets/Screenshot 2023-10-11 at 9.22.15 PM.png" className="img-fluid" alt="portfolio-img" />
              <div className="card-body text-center">
                <h6 className="card-title">Night Lineup</h6>
                <p className="card-text text-secondary">HTML/CSS/JavaScript</p>
              </div>
            </a>
          </div>
          <div className="col-lg-3 px-md-3 px-0 col-md-4 card-wrapper">
            <a className="card mt-4" href="https://devon2731.github.io/Translator/">
              <img src="./assets/Screenshot 2023-10-15 at 4.48.20 PM.png" className="img-fluid" alt="portfolio-img" />
              <div className="card-body text-center">
                <h6 className="card-title">Translator App</h6>
                <p className="card-text text-secondary">HTML/CSS/JavaScript</p>
              </div>
            </a>
          </div>
          <div className="col-lg-3 px-md-3 px-0 col-md-4 card-wrapper">
            <a className="card mt-4" href="https://devon2731.github.io/HW-Weather-Dashboard/">
              <img src="./assets/270458549-7e33fdb0-aac5-4d03-9c11-8ed7e37a38f9-1.png"  className="img-fluid" alt="portfolio-img" />
              <div className="card-body text-center">
                <h6 className="card-title">Weather Dashboard App</h6>
                <p className="card-text text-secondary">HTML/CSS/API/JavaScript</p>
              </div>
            </a>
          </div>
          <div className="col-lg-3 px-md-3 px-0 col-md-4 card-wrapper">
            <a className="card mt-4" href="https://devon2731.github.io/HW-Work-Scheduler/">
              <img src="./assets/269428973-e2861515-3ad7-4405-9a31-d0b361be2b5c.png" className="img-fluid" alt="portfolio-img" />
              <div className="card-body text-center">
                <h6 className="card-title">Work Scheduler</h6>
                <p className="card-text text-secondary">HTML/CSS/Bootstrap</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    );
  };

export default PortfolioSection