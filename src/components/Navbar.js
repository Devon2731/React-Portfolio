import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './styles/Navbar.css'; 

    function Navbar() {
        return (
          <nav className="container-xxl navbar navbar-expand-lg py-3 bg-dark navbar-dark">
            <div className="container-fluid">
              <Link className="navbar-brand fw-bold fs-3" to="/">Devon Whitaker</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  {/* Adjust the links based on your portfolio sections */}
                  <li className="nav-item mx-2">
                    <Link className="nav-link" to="/skills">SKILLS</Link>
                  </li>
                  <li className="nav-item mx-2">
                    <Link className="nav-link" to="/portfolio">PORTFOLIO</Link>
                  </li>
                  <li className="nav-item mx-2">
                    <Link className="nav-link" to="/about">ABOUT</Link>
                  </li>
                  <li className="nav-item mx-2">
                    <Link className="nav-link" to="/cv">CURRICULUM VITAE</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        );
      }
      
      export default Navbar;