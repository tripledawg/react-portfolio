import React from 'react';
import './Contact.css';
import resume from '../assets/Leslie_Crouch_Resume_2022.pdf'

function Contact() {
  return (
    <section className="row" id="contact-me">
       <h2>Contact Me</h2>
<div className="container">
     <nav className="contact-links">
      <ul>
         <li>
                            <a href="mailto: iamlesliecrouch@gmail.com">Send Email</a>
                        </li>
                        <li>
                            <a href="https://github.com/tripledawg">GitHub</a>
                        </li >
        <a id="resume" href = {resume} >Resume</a>
        <li>
                            <a href="https://www.linkedin.com/in/leslie-crouch-a6974214a">LinkedIn</a>
                        </li>
      </ul>
      </nav>
      </div>
    </section>
    
     
  );
}

export default Contact;
