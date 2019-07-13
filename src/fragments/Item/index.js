import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { graphql } from 'gatsby';
// import uuid from 'uuid/v1';

import Main from '../../layouts/Main';
// import Portfolio from '../Portfolio';

const Html = styled.div`
  height: 100%;
  & > * {
    max-width: 920px;
  }
  & > img {
    max-width: 100%;
  }

  h1 {
    font-size: 3em;
    font-weight: 700;
    margin: 0 0 40px 0;
  }

  h2 {
    font-weight: 700;
    margin: 40px 0 20px 0;
  }

  p {
    font-weight: 300;
  }

  img {
    width: 100%;
    height: auto;
    margin: 30px 0;
  }
`;
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
