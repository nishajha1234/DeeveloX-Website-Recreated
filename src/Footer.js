import React from 'react';
import { Link } from 'react-scroll';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div class="paragraph">
    Transform your business with our powerful branding tools.
    </div>
    <p>Elevate your business with our branding solutions.</p>
    <Link
          to="contact-us"
          spy={true}
          smooth={true}
          offset={-70} // Adjust offset as needed to accommodate your fixed header
          duration={500}
          className="navigation__link"
        >
          <button className="button">Contact Us</button>
        </Link>
  </footer>
);

export default Footer;
