
import './App.css';

import React from 'react';
// components
import Project from './components/Project';
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
      <Project />
      <Homework />
      <Footer />
      <Contact />
    </div>
  );
}
export default App;