import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import parse from 'html-react-parser';

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
    font-size: 2.5em;
    font-weight: 700;
    margin: 0 0 40px 0;
  }

  iframe + h1,
  picture + h1 {
    margin-top: 20px;
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

  iframe {
    width: 100%;
    max-width: 920px;
    height: 517px;
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

    &.large {
      max-width: 920px;
    }

    &.center {
      margin: 0 auto;
      text-align: center;
      & > p {
        text-align: center;
      }
    }

    &.mosaic {
      display: grid;
      grid-gap: 10px;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      img {
        border: 1px solid ${p => p.theme.color.gray};
      }
      &.nobg {
        img {
          border: none;
        }
      }

      &.medium {
        grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
      }

      &.large {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      }

      &.four {
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      }

      &.five {
        grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
      }
    }

    & > p {
      font-style: italic;
    }
  }
`;

const Item = props => {
  const { html } = props;
  return (
    <Main>
      <Html>{parse(html)}</Html>
    </Main>
  );
};

Item.propTypes = {
  html: PropTypes.string.isRequired,
};

export default Item;
