import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({ error, pastDelay }) => {
  // Handle the loading state
  if (pastDelay) {
    return <div>Loading...</div>;
  }
  // Handle the error state
  if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  }

  return null;
};

Loading.propTypes = {
  error: PropTypes.bool,
  pastDelay: PropTypes.bool.isRequired,
};

Loading.defaultProps = {
  error: false,
};

export default Loading;
