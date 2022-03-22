import React from 'react';

import resume from '../assets/Leslie_Crouch_Resume_2022.pdf'

function Contact() {
  return (
    <footer id = "contact" ClassName="contacts">
      <h1>Contact Me!</h1>
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
    </footer>
  );
}

export default Contact;
