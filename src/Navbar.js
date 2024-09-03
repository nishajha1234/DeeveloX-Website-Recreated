// Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <p>deevelo <span style={{ color: 'red' }}>X</span></p>
      </div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
      <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-70} // Adjust offset as needed to accommodate your fixed header
          duration={500}
          className="navigation__link"
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          to="additional-content"
          spy={true}
          smooth={true}
          offset={-70} // Adjust offset as needed to accommodate your fixed header
          duration={500}
          className="navigation__link"
          onClick={toggleMenu}
        >
          Services
        </Link>
        <Link
          to="about-us"
          spy={true}
          smooth={true}
          offset={-70} // Adjust offset as needed to accommodate your fixed header
          duration={500}
          className="navigation__link"
          onClick={toggleMenu}
        >
          About
        </Link>
        <Link
          to="contact-us"
          spy={true}
          smooth={true}
          offset={-70} // Adjust offset as needed to accommodate your fixed header
          duration={500}
          className="navigation__link"
          onClick={toggleMenu}
        >
          Contact
        </Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
