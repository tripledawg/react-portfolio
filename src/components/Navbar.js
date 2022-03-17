import React from 'react';

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
// const styles = {
//   card: {
//     margin: 20,
//     background: '#e8eaf6',
//   },
//   heading: {
//     background: '#9a74db',
//     minHeight: 50,
//     lineHeight: 3.5,
//     fontSize: '1.2rem',
//     color: 'white',
//     padding: '0 20px',
//   },
// };

// export default function Navbar() {
  const linkStyle = { border: '1px black', padding: '5px' };

function Navbar() {
  return (
    <nav className="main-header-menu">
    <section
      style={{
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
