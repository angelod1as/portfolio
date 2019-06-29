import React from 'react';
import Fade from 'react-reveal/Fade';

const Menu = () => (
  <Fade>
    <div className="menu">
      <div className="menu-item">
        <p>things I do</p>
        <ul>
          <li>front-end development</li>
          <li>project management</li>
          <li>editorial design</li>
          <li>fiction writing</li>
        </ul>
      </div>
      <div className="menu-item">
        <p>things I know</p>
        <ul>
          <li>react</li>
          <li>node</li>
          <li>javascript/babel</li>
          <li>css/sass/stylus</li>
        </ul>
      </div>
      <div className="menu-item">
        <p>things I do</p>
        <ul>
          <li>front-end development</li>
          <li>project management</li>
          <li>editorial design</li>
          <li>fiction writing</li>
        </ul>
      </div>
    </div>
  </Fade>
);

export default Menu;
