
import './App.css';

import React from 'react';
// components
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer'

const styles = {
  body: {
    backgroundColor: 'white',
    fontFamily: 'sans-serif',
    margin: 2,
    padding: 10,
}
};

function App() {
  return (
    <div style={styles.body} >
      <Header />
      <AboutMe />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;