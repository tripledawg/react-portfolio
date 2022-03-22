
import './App.css';

import React from 'react';
// components
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Homework from './components/Homework';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Work from './components/Work';
import Contact from './components/Contact'

function App() {
  return (
    <div>
       <Navbar />
      <Header />
      <AboutMe />
      <Work />
      <Projects />
      <Homework />
      <Contact />
    </div>
  );
}
export default App;