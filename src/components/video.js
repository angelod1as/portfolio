import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import sizes from './breakpoints';

const Video = ({ id, title }) => {
  const options = '';

  const Wrapper = styled.div`
    /* position: relative;
    padding-bottom: 56.25%;
    padding-top: 25px;
    height: 0;
    max-height: 600px; */
    /* padding-bottom: 600px; */

    /* @media ${sizes.large} {
      padding-bottom: 600px;
      &.small {
        padding-bottom: 300px;
      }
    } */
  `;

  const Iframe = styled.iframe`
    @media ${sizes.small} {
      height: 300px !important;
    }
    /* position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-width: 920px;
    max-height: 600px; */
  `;

  return (
    <Wrapper className="video">
      <Iframe
        title={title}
        allowFullScreen="allowFullScreen"
        frameBorder="0"
        src={`https://www.youtube.com/embed/${id}?${options}`}
      />
    </Wrapper>
  );
};

Video.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Video;
