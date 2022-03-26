
import './App.css';

import React from 'react';
// components
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Homework from './components/Homework';
import AboutMe from './components/AboutMe';
import Work from './components/Work';
import Contact from './components/Contact'
import Footer from './components/Footer'

const styles = {
  body: {
    backgroundColor: '#8baaad',
    fontFamily: 'sans-serif',
    margin: 2,
    padding: 10,
}
};

function App() {
  return (
    <div style={styles.body} >
       <Navbar />
      <Header />
      <AboutMe />
      <Work />
      <Projects />
      <Homework />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;