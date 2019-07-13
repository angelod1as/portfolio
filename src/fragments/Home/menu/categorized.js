import React from 'react';
import uuid from 'uuid/v1';
import PropTypes from 'prop-types';
import Link from '../../../components/Link';

const Categorized = ({ categories, items, MenuItem }) => {
  // filtering categories
  let categs = categories;
  categs = categs
    .filter(item => item !== 'things i do')
    .filter(item => typeof item !== 'undefined' && item);

  if (categs.length < 0) {
    categs = categs.filter((v, i) => categs.indexOf(v) === i);
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

  const print = categs.map(cat => {
    return (
      <MenuItem key={uuid()}>
        <p>{cat}</p>
        {grouped[cat].map(inside => (
          <Link className="bg" to={inside.fullPath} key={uuid()}>
            {inside.title}
          </Link>
        ))}
      </MenuItem>
    );
  });
  return print;
};

Categorized.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  MenuItem: PropTypes.shape().isRequired,
};

export default Categorized;
