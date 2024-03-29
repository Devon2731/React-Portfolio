// import React from "react";
import nightLineupImage from "../assets/Screenshot 2023-10-11 at 9.22.15 PM.png";
import Translator from "../assets/Screenshot 2023-10-15 at 4.48.20 PM.png";
import Weather from "../assets/270458549-7e33fdb0-aac5-4d03-9c11-8ed7e37a38f9-1.png";
import workScheduler from "../assets/269428973-e2861515-3ad7-4405-9a31-d0b361be2b5c.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/portfolioSection.css";

function PortfolioSection() {
  const projects = [
    {
      name: "Night Lineup",
      image: nightLineupImage,
      github: "https://github.com/Devon2731/night-in-lineup",
      deployed: "https://nightin-lineup.onrender.com/",
    },
    {
      name: "Translator",
      image: Translator,
      github: "https://github.com/Devon2731/Translator",
      deployed: "https://devonwhitaker.github.io/Translator/",
    },
    {
      name: "Weather Dashboard",
      image: Weather,
      github: "https://github.com/devonwhitaker/Weather-Dashboard",
      deployed: "https://devon2731.github.io/HW-Weather-Dashboard/",
    },
    {
      name: "Work Scheduler",
      image: workScheduler,
      github: "https://github.com/Devon2731/HW-Work-Scheduler",
      deployed: "https://devon2731.github.io/HW-Work-Scheduler/",
    },
  ];

  return (
    <div className="portfolio-wrapper">
      <h1 className="portfolio-title">Portfolio</h1>
      <div className="container">
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-4">
                <img src={project.image} className="card-img-top" alt={`Screenshot of ${project.name} project`} />
                <div className="card-body">
                  <h5 className="card-title">{project.name}</h5>
                  {project.description && <p className="card-text">{project.description}</p>}
                  <a href={project.github} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href={project.deployed} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    Deployed
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortfolioSection;
