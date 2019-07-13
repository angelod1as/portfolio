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
  const menu = items.filter(item => item.menu);
  let categories = menu.map(item => item.category);

  // things i do
  const Default = () => {
    const print = menu.map(item => {
      const { category } = item;

      if (
        (typeof category === 'string' && category.toLowerCase() === 'things i do') ||
        (typeof item !== 'undefined' && item)
      ) {
        return (
          <Link className="bg" to={item.fullPath} key={uuid()}>
            - {item.title}
          </Link>
        );
      }
    });
    return (
      <MenuItem key={uuid()}>
        <p>things i do</p>
        {print}
      </MenuItem>
    );
  };

  // other categories
  const Categorized = () => {
    // filtering categories
    categories = categories
      .filter(item => item !== 'things i do')
      .filter(item => typeof item !== 'undefined' && item);

    if (categories.length < 0) {
      categories = categories.filter((v, i) => categories.indexOf(v) === i);
    }

    // Grouping items
    const groupBy = key => array =>
      array.reduce((objectsByKeyValue, obj) => {
        const newObj = objectsByKeyValue;
        const value = obj[key];
        newObj[value] = (objectsByKeyValue[value] || []).concat(obj);
        return newObj;
      }, {});

    const grouped = groupBy('category')(items);

    const print = categories.map(cat => {
      return (
        <MenuItem key={uuid()}>
          <p>{cat}</p>
          {grouped[cat].map(inside => (
            <Link className="bg" to={inside.fullPath} key={uuid()}>
              - {inside.title}
            </Link>
          ))}
        </MenuItem>
      );
    });
    return print;
  };

  return (
    <Fade>
      <div className="menu">
        <Default />
        <Categorized />
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
