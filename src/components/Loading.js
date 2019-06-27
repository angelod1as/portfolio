import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({ isLoading, error }) => {
  // Handle the loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }
  // Handle the error state
  if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  }

  return null;
};

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

export default Loading;
