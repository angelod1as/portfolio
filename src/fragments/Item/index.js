import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Main from '../../layouts/Main';

const Html = styled.div`
  padding-bottom: 100px;
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
  }

  figure {
    margin: 30px 0;
    max-width: 920px;

    &.small {
      max-width: 300px;
    }

    &.medium {
      max-width: 600px;
    }

    &.big,
    &.full {
      max-width: 100%;
    }
  }
`;

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
};

export default Item;
