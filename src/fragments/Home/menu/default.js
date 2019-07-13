import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import Link from '../../../components/Link';

const Default = ({ menu, MenuItem }) => {
  const print = menu
    .filter(
      item =>
        (typeof item.category === 'string' && item.category.toLowerCase() === 'things i do') ||
        (typeof item !== 'undefined' && item)
    )
    .map(item => {
      return (
        <Link className="bg" to={item.fullPath} key={uuid()}>
          {item.title}
        </Link>
      );
    });
  return (
    <MenuItem key={uuid()}>
      <p>things i do</p>
      {print}
    </MenuItem>
  );
};

Default.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  MenuItem: PropTypes.shape().isRequired,
};

export default Default;
