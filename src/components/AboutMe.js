
import React from 'react';
import portrait from '../assets/images/selfie1mb.png'
import './AboutMe.css';

function AboutMe(){
  return (
    <section className="row" id="about-me">
<h2>About Me</h2>
<div className="container">
  <img class="photo" src={portrait} alt="photo of Leslie" />
  <p>A twenty year veteran of public libraries and public schools, my number one signature
                  strength is a love of learning. While pursuing a PhD in English education from The University of
                    Georgia, I developed a love for philosophy. Following our move to Florida in 2019 I began writing a
                    book about how to use psychological and philosophical approaches to navigate the unique challenges
                    of modernity. I have a
                    strong work ethic, and I am known by my colleagues as someone eager to analyze and synthesize data
                    to help better steer team objectives. I am very motivated by practical matters and real-world
                    results, and I gain a great deal of satisfaction
                    on working behind the scenes doing the job that needs to be done. In my spare time I enjoy
                    refinishing furniture, reading, hiking, and gardening. I have a witty and wonderful husband and
                    three very fun
                    and mischievous cats. Fun fact: We recently
                    bought a 1960's home located on the "Space Coast", and as part renovations I built and
                    tiled both showers from the floor up.
                </p>
</div>
    </section>
  );
}
  
export default AboutMe
