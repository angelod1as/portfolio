import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { graphql } from 'gatsby';
// import uuid from 'uuid/v1';

import Main from '../../layouts/Main';
// import Portfolio from '../Portfolio';

const Html = styled.div``;
// const Port = styled.div``;

const Item = props => {
  const { html } = props;
  return (
    <Main>
      <Html dangerouslySetInnerHTML={{ __html: html }} />
    </Main>
  );
};

Item.propTypes = {
  html: PropTypes.string.isRequired,
  // query: PropTypes.string,
};

// Item.defaultProps = {
//   query: null,
// };

export default Item;
