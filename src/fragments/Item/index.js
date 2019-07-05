import React from 'react';
import PropTypes from 'prop-types';
import Main from '../../layouts/Main';

const Item = ({ html }) => {
  return (
    <Main>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Main>
  );
};

Item.propTypes = {
  html: PropTypes.string.isRequired,
};

export default Item;
