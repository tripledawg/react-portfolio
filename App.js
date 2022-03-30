import React from 'react';
// components
import Project from './components/Project';
import Greeting from './components/Greeting';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Greeting />
      <Form />
      <Navbar />
      <Project />
      <Card />
      <Card />
      <Footer />
    </div>
  );
}
export default App;
