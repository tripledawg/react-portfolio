import React from 'react';

import resume from '../assets/Leslie_Crouch_Resume_2022.pdf'

function Contact() {
  return (
    <footer id = "contact" ClassName="contacts">
      <h1>Contacts</h1>
      <ul>
        <a href = {resume} >Resume</a>
      </ul>
    </footer>
  );
}

export default Contact;
