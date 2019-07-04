import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ html }) => {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

Item.propTypes = {
  html: PropTypes.string.isRequired,
};

export default Item;
