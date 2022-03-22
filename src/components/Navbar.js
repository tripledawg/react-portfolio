import React from 'react';

const linkStyle = { border: '1px black', padding: '5px' };

function Navbar() {
  return (
    <nav className="main-header-menu">
    <section
      style={{
        float: 'right',
        display: 'flex',
        fontFamily: 'helvetica',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      }}
>
      <div style={linkStyle}>
        <a href="#about-me">About Me</a>
      </div>
      <div style={linkStyle}>
        <a href="#work">Work</a>
      </div>
      <div style={linkStyle}>
        <a href="#resume">Resume</a>
      </div>
      <div style={linkStyle}>
        <a href="#contact">Contacts</a>
      </div>
    </section>
  </nav>
  );
};

export default Navbar;
