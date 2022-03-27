import React from 'react';
import wordlepic from '../assets/images/twordlescreenshot2.png';
import DAMpic from '../assets/images/dinner-and-a-movie-1280x738.png';


function Project() {
  return (
    <div className="container">
      <div className="projects">
        <div className="project-card">
          <a href="https://twordle2.herokuapp.com/">
          <img src={wordlepic} class ="project-image" alt="Wordle 2 app" /></a>
          <a href="https://github.com/hak9292/Wordle2">
          <h3>Twordle Repository</h3></a>
          <p>JS and MVC design</p>
        </div>    
    <div className="project-card">
      <a href="https://hak9292.github.io/dinner-and-a-movie/">
        <img src={DAMpic} alt="Dinner and a Movie" /></a>
      <a href="https://github.com/hak9292/dinner-and-a-movie">
        <h3>Dinner and a Movie Repository</h3>
      </a>
      <p>
        JS and Server-Side APIs`
      </p>
    </div>
    </div> 
    </div> 
  );
};

export default Project;
