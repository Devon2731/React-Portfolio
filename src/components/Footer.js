import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import "./styles/footer.css";

const socials = [
  {
    name: "GitHub",
    link: "https://github.com/devonwhitaker",
    icon: faGithub,
    color: "#5DE12"
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/devon-whitaker-1b0b821a0/",
    icon: faLinkedin,
    color: "#2EACE8"
  },
];

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <div className="footer-container">
        <section className="social-icons-wrapper d-flex flex-md-row justify-content-center">
          {socials.map(({ name, url, icon, color }) => (
            <div
              key={name}
              className="d-flex flex-column align-items-center mx-md-2 transparent-bg"
            >
              <a
                href={url}
                className={`icon ${name}`}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={icon}
                  bounce
                  className="footer-icon-size" 
                  style={{ color: color }}
                />
              </a>
              <a href={url} target="_blank" rel="noreferrer">
                <span className="d-inline-block mx-1 name">{name}</span>
              </a>
            </div>
          ))}
        </section>
        <section className="form-footer">
        <h5 className="designer-text">Designed with by Devon Whitaker 😎</h5>
          <p>
          <h6 className="copyright-text">&copy; {new Date().getFullYear()} All rights reserved.</h6>
          </p>
        </section>
      </div>
    </footer>
  );
};
// Export Footer
export default Footer;