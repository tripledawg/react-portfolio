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
        <a href="#">About Me</a>
      </div>
      <div style={linkStyle}>
        <a href="#">Work</a>
      </div>
      <div style={linkStyle}>
        <a href="#">Resume</a>
      </div>
      <div style={linkStyle}>
        <a href="#">Contact</a>
      </div>
    </section>
  </nav>
  );
};

export default Navbar;
