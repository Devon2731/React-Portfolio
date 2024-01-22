import React from 'react';
import Footer from './styles/footer.css';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container-xxl flex-wrap pt-3 d-flex align-items-center justify-content-center justify-content-md-between">
        <p>Copyright © 2023 Devon Whitaker</p>
        <ul className="social-icons d-flex">
          <a href="https://twitter.com/DevonWhita48248" className="bg-primary mx-2 text-white d-flex align-items-center justify-content-center text-decoration-none rounded-circle">
            <small><i className="fab fa-twitter"></i></small>
          </a>
          <a href="https://github.com/Devon2731" className="bg-primary mx-2 text-white d-flex align-items-center justify-content-center text-decoration-none rounded-circle">
            <small><i className="fab fa-github"></i></small>
          </a>
          <a href="https://www.linkedin.com/in/devon-whitaker-78895a275?trk=people-guest_people_search-card" className="bg-primary mx-2 text-white d-flex align-items-center justify-content-center text-decoration-none rounded-circle">
            <small><i className="fab fa-linkedin-in"></i></small>
          </a>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;