import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const Opening = () => (
  <Fade>
    <div className="opening">
      <p>flag1 flag2</p>
      <h1>My name is angelo</h1>
      <p>
        Journalist turned designer turned developer. Spent 5 years at Folha de S.Paulo designing
        print, thinking infographics and writing code. Simultaneously, created and maintained a
        satyrical sci-fi newspaper.
      </p>
      <ul>
        <li>portfolio</li>
        <li>
          <Link to="about">About me</Link>
        </li>
      </ul>
    </div>
  </Fade>
);

export default Opening;
