import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="nav-links">
        <ul>
                <li>
                    <a href="#about-me">About Me</a>
                </li>
                <li>
                    <a href="#work">Work</a>
                </li>
                <li>
                    <a href="#contact-me">Contact Me</a>
                </li>
                <li>
                    <a href="#resume">Resume</a>
                </li>
            </ul>
  </nav>
  );
};

export default Navbar;
