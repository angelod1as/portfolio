import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import uuid from 'uuid/v1';
import Link from '../../components/Link';
import size from '../../components/breakpoints';

const MenuItem = styled.div`
  margin: 50px 0;

  a {
    font-size: 35px;
    font-weight: 700;
    display: block;
    margin: 15px 0;
    line-height: 1.3em;
  }

  @media ${size.medium} {
    max-width: 600px;
    margin: 0 auto;
  }
`;

const Menu = ({ from, items }) => {
  // filtering categories
  const categories = items.filter(item => item.category !== 'hidden').map(item => item.category);
  const filtered = categories.filter((v, i) => categories.indexOf(v) === i);

  // Grouping items
  const groupBy = key => array =>
    array.reduce((objectsByKeyValue, obj) => {
      const newObj = objectsByKeyValue;
      const value = obj[key];
      newObj[value] = (objectsByKeyValue[value] || []).concat(obj);
      return newObj;
    }, {});

  const categorized = groupBy('category');
  const grouped = categorized(items);

  const insert = filtered.map(each => {
    return (
      <MenuItem key={uuid()}>
        <p>{each}</p>
        {grouped[each].map(inside => (
          <Link className="bg" to={inside.fullPath} key={uuid()}>
            {inside.title}
          </Link>
        ))}
      </MenuItem>
    );
  });

  return (
    <Fade>
      <div className="menu">
        {insert}
        {/* {items.map(item => {
          console.log(item);
          return (
            <MenuItem key={uuid()}>
              <p>{item.title}</p>
              <p>{menu.title}</p>
              {menu.list.map(item => (
                <Link className="bg" to={item.route} key={uuid()}>
                  {item.item}
                </Link>
              ))}
            </MenuItem>
          );
        })} */}
      </div>
    </Fade>
  );
};

Menu.propTypes = {
  from: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

Menu.defaultProps = {
  from: null,
};
export default Menu;
