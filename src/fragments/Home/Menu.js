import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import uuid from 'uuid/v1';
import Link from '../../components/Link';

const MenuItem = styled.div`
  margin: 50px 0;

  a {
    font-size: 35px;
    font-weight: 700;
    display: block;
    margin: 15px 0;
  }
`;

const Menu = ({ from, items }) => {
  return (
    <Fade>
      <div className="menu">
        {items.map(item => {
          console.log(item);
          return (
            <MenuItem key={uuid()}>
              <p>{item.title}</p>
              {/* <p>{menu.title}</p>
              {menu.list.map(item => (
                <Link className="bg" to={item.route} key={uuid()}>
                  {item.item}
                </Link>
              ))} */}
            </MenuItem>
          );
        })}
      </div>
    </Fade>
  );
};

export default Menu;
