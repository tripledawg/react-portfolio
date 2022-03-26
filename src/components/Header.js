import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header-my-name">Leslie Crouch</h1>
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
    </header>
  );
}

export default Header;
