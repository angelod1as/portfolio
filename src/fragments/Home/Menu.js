import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import size from '../../components/breakpoints';

import Default from './menu/default';
import Categorized from './menu/categorized';
import Lists from './menu/lists';

const MenuItem = styled.div`
  margin: 50px 0;

  a,
  li {
    font-weight: 700;
    display: block;
    margin: 15px 0;
    position: relative;
    padding-left: 30px;
    &:before {
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  li > a {
    padding-left: 0;
    &:before {
      left: -30px;
    }
  }

  a {
    padding-left: 30px;
    font-size: 2em;
    line-height: 1.3em;
    &:before {
      content: '›';
    }
    &:hover {
      &:before {
        content: '»';
      }
    }
  }

  li {
    font-size: 1.2em;
    line-height: 1em;
    & > a {
      font-size: 1em;
      &:before {
        left: -27px;
      }
    }
    &:before {
      content: '∙';
    }
    &.listlink {
      &:before {
        content: none;
      }
    }
  }

  @media ${size.medium} {
    max-width: 600px;
    margin: 0 auto;
  }
`;

const Menu = ({ from, items }) => {
  const menu = items.filter(item => item.menu);
  const categories = menu.map(item => item.category);

  const props = {
    from,
    menu,
    items,
    categories,
    MenuItem,
  };

  return (
    <Fade>
      <div className="menu">
        <Default {...props} />
        <Categorized {...props} />
        <Lists {...props} />
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
