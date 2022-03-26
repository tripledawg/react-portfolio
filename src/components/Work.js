import React from 'react';
import wordlepic from '../assets/images/twordlescreenshot2.png';
import DAMpic from '../assets/images/dinner-and-a-movie-1280x738.png';
import weatherpic from '../assets/images/weather-dashboard-screenshot-800x555.png';
import plannerpic from '../assets/images/work-day-planner-screenshot 640x640.png';
import techBlogpic from '../assets/images/tech-blog-screenshot.png';
import './Work.css';

function Work() {
  return (
    <section className="row" id="work">
      <h2>My Work</h2>
      <div className="container">
        <div className="projects">
          <div className="project-card">
            <a href="https://twordle2.herokuapp.com/">
              <img className= "project-image" src={wordlepic}  alt="Wordle 2 app" />
              <div className="project-title">
                <a href="https://github.com/hak9292/Wordle2">
                  <h3>Twordle Repository</h3>
                  <p>MySQL and MVC design</p>
                </a>
              </div>
            </a>
          </div>
          <div className="project-card">
            <a className="project-image" href="https://hak9292.github.io/dinner-and-a-movie/">
              <img className= "project-image" src={DAMpic} className="project-image" alt="Dinner and a Movie" />
              <div className="project-title">
                <a href="https://github.com/hak9292/dinner-and-a-movie">
                  <h3>Dinner and a Movie Repository</h3>
                  <p>JS and Server-Side APIs`</p>
                </a>
              </div>
            </a>
          </div>
          <div className="homework-card">
            <a href="https://tech-blog-feb-2022.herokuapp.com/">
              <img className= "project-image" src={techBlogpic} alt="tech blog app" />
              <div className="project-title">
            <a href="https://github.com/tripledawg/tech-blog-using-MVC-and-Handlebars">
              <h3>
                Tech Blog Repository
              </h3>
              <p>MVC and Handlebars</p>
              </a>
              </div>
            </a>
          </div>
        
          <div className="homework-card">
          <a href="https://tripledawg.github.io/weather-dashboard-using-server-side-APIs/">
            <img className= "project-image" src={weatherpic} alt="weather dashboard app" />
            <div className="project-title">
          <a href="https://github.com/tripledawg/weather-dashboard-using-server-side-APIs">
            <h3>Weather Dashboard Repository</h3>
          <p>JS and Server-Side APIs</p>
          </a>
          </div>
          </a>
          </div>
        
          <div className="homework-card">
          <a href="https://tripledawg.github.io/05-Third-Party-APIs-Work-Day-Scheduler/">
            <img className= "project-image" src={plannerpic} alt="day planner app" />
            <div className="project-title">
          <a href="https://github.com/tripledawg/05-Third-Party-APIs-Work-Day-Scheduler">
            <h3>Work Day Planner Repository</h3>
          </a>
          <p>
            JS and Third-Party APIs
          </p>
        </div>
        </a>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
