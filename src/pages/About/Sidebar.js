import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const AboutSidebar = () => (
  <Fade>
    <div className="about">
      <Link to="/">Clica nóis</Link>
    </div>
  </Fade>
);

export default AboutSidebar;
