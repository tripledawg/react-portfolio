import React from 'react';

import wordlepic from '../assets/images/twordlescreenshot2.png';
import DAMpic from '../assets/images/dinner-and-a-movie-1280x738.png';
import weatherpic from '../assets/images/weather-dashboard-screenshot-800x555.png'
// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {
  projectCard: {
    margin: 20,
    background: '#e8eaf6',
    display: 'flex',
    'flex-direction': 'row',
    'flex-wrap': 'wrap',
    'justify-content':'space-between'
  },
  heading: {
    background: '#3f51b5',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
  content: {
    padding: 20,
  },
};

// In `Card`, we can assign a style from an object by using curly braces
// We are assigning the card, heading, and content all from our `style` object
function Project() {
  return (
    // <a href="https://hak9292.github.io/dinner-and-a-movie/">
    //                         <img src="assets/images/dinner-and-movie807x403.png" alt="dinner and a movie app"
    //                             class="project-image" />
    <div style={styles.projectCard}>
      <a href="https://twordle2.herokuapp.com/">
        <img src={wordlepic} alt="Wordle 2 app" /></a>
        <a href="https://github.com/hak9292/Wordle2">
        <h3>Twordle Repository</h3> 
      </a>
      <a href="https://hak9292.github.io/dinner-and-a-movie/">
        <img src={DAMpic} alt="Dinner and a Movie" /></a>
      <a href="https://github.com/hak9292/dinner-and-a-movie">
        <h3>Dinner and a Movie Repository</h3> 
      </a>
      <div style={styles.content}>
        `JS and Server-Side APIs`
      </div>
    </div>
  );
}


// export default Card;



// React components are isolated parts of an application that help organize and isolate different parts of the program into smaller chunks
// We can pass data to these components and even render other components inside other components.
// function Project() {
//   const projectCard = {
//     <div class="container">
//                 <div class="projects">
//                     <div class="project-card">
//                         <a href="https://hak9292.github.io/dinner-and-a-movie/">
//                             <img src="assets/images/dinner-and-movie807x403.png" alt="dinner and a movie app"
//                                 class="project-image" />
//                             <div class="project-title">
//                                 <a href="https://github.com/hak9292/dinner-and-a-movie">
//                                     <h3>Dinner and a Movie Repository</h3>
//                                     <p>JS and Server-Side APIs</p>
//                                 </a>
//                             </div>
//                         </a>
//                     </div>
//                     <div class="project-card">
//                         <a href="https://twordle2.herokuapp.com/">
//                             <img src="assets/images/twordlescreenshot2.png" alt="Wordle 2 app"
//                                 class="project-image" />
//                             <div class="project-title">
//                                 <a href="https://github.com/hak9292/Wordle2">
//                                     <h3>Twordle Repository</h3>
//                                     <p>MVC Handlebars MySQL Heroku</p>
//                                 </a>
//                             </div>
//                         </a>
//                     </div>
//   };
//   // The return statement contains something called "JSX"
//   // JSX is a syntax extension to Javascript that allows us to write HTML inside Javascript
//   // Expressions in JSX should be placed in curly braces {}
//   return (
//     <div className="container">
//       <div>{projectCard}</div>
//     </div>
//   );
// }

export default Project;
