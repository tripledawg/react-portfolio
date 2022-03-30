import React from 'react';
import weatherpic from '../assets/images/weather-dashboard-screenshot-800x555.png'
import plannerpic from '../assets/images/work-day-planner-screenshot 640x640.png'
import techBlogpic from '../assets/images/tech-blog-screenshot.png'
import './Homework.css';

function Homework() {
  return (
    <div className="homework-card">
      <a href="https://tech-blog-feb-2022.herokuapp.com/">
        <img src={techBlogpic} alt="tech blog app" /></a>
        <a href="https://github.com/tripledawg/tech-blog-using-MVC-and-Handlebars">
        <h3>Tech Blog Repository</h3> 
      </a>
      <div>
        `MVC and Handlebars`
      </div>
      <a href="https://tripledawg.github.io/weather-dashboard-using-server-side-APIs/">
        <img src={weatherpic} alt="weather dashboard app" /></a>
      <a href="https://github.com/tripledawg/weather-dashboard-using-server-side-APIs">
        <h3>Weather Dashboard Repository</h3> 
      </a>
      <div>
        JS and Server-Side APIs
      </div>
      <a href="https://tripledawg.github.io/05-Third-Party-APIs-Work-Day-Scheduler/">
        <img src={plannerpic} alt="day planner app" /></a>
      <a href="https://github.com/tripledawg/05-Third-Party-APIs-Work-Day-Scheduler">
        <h3>Work Day Planner Repository</h3> 
      </a>
      <div>
        JS and Third-Party APIs
      </div>
    </div>
  );
}

export default Homework;
