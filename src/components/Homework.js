import React from 'react';
import weatherpic from '../assets/images/weather-dashboard-screenshot-800x555.png'
import plannerpic from '../assets/images/work-day-planner-screenshot 640x640.png'

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
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
function Homework() {
  return (
    // <a href="https://hak9292.github.io/dinner-and-a-movie/">
    //                         <img src="assets/images/dinner-and-movie807x403.png" alt="dinner and a movie app"
    //                             class="project-image" />
    <div style={styles.projectCard}>
      <a href="https://twordle2.herokuapp.com/">
        <img src={weatherpic} alt="Wordle 2 app" /></a>
        <a href="https://github.com/hak9292/Wordle2">
        <h3>Twordle Repository</h3> 
      </a>
      <a href="https://hak9292.github.io/dinner-and-a-movie/">
        <img src={plannerpic} alt="Dinner and a Movie" /></a>
      <a href="https://github.com/hak9292/dinner-and-a-movie">
        <h3>Dinner and a Movie Repository</h3> 
      </a>
      <div style={styles.content}>
        `JS and Server-Side APIs`
      </div>
    </div>
  );
}
// In `Card`, we can assign a style from an object by using curly braces
// We are assigning the card, heading, and content all from our `style` object
// function Card() {
//   return (
//     <div style={styles.card}>
//       <div style={styles.heading}>Lorem ipsum dolor</div>
//       <div style={styles.content}>
//         `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//         accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
//         illo inventore veritatis et quasi architecto beatae vitae dicta sunt
//         explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
//         odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
//         voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
//         quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
//         eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
//         voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
//         corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
//         Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
//         quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
//         voluptas nulla pariatur?`
//       </div>
//     </div>
//   );
// }

// export default Card;
export default Homework;
