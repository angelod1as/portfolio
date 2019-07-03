import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import uuid from 'uuid/v1';

const MenuItem = styled.div`
  margin: 50px 0;

  a {
    font-size: 35px;
    font-weight: 700;
    display: block;
    margin: 15px 0;
  }
`;

const Menu = () => {
  const menus = [
    {
      title: 'things I do',
      list: [
        {
          item: 'websites free maintenance',
          route: '#',
        },
        {
          item: 'front-end development',
          route: '#',
        },
        {
          item: 'project management',
          route: '#',
        },
        {
          item: 'editorial design',
          route: '#',
        },
        {
          item: 'fiction writing',
          route: '#',
        },
      ],
    },
    {
      title: 'things I know',
      list: [
        {
          item: 'react',
          route: '#',
        },
        {
          item: 'node',
          route: '#',
        },
        {
          item: 'javascript/babel',
          route: '#',
        },
        {
          item: 'css/sass/stylus',
          route: '#',
        },
      ],
    },
    {
      title: 'things I do',
      list: [
        {
          item: 'front-end development',
          route: '#',
        },
        {
          item: 'project management',
          route: '#',
        },
        {
          item: 'editorial design',
          route: '#',
        },
        {
          item: 'fiction writing',
          route: '#',
        },
      ],
    },
    {
      title: 'things I do',
      list: [
        {
          item: 'front-end development',
          route: '#',
        },
        {
          item: 'project management',
          route: '#',
        },
        {
          item: 'editorial design',
          route: '#',
        },
        {
          item: 'fiction writing',
          route: '#',
        },
      ],
    },
  ];

  return (
    <Fade delay={400}>
      <div className="menu">
        {menus.map(menu => (
          <MenuItem key={uuid()}>
            <p>{menu.title}</p>
            {menu.list.map(item => (
              <Link className="bg" to={item.route} key={uuid()}>
                {item.item}
              </Link>
            ))}
          </MenuItem>
        ))}
      </div>
    </Fade>
  );
};

export default Menu;
