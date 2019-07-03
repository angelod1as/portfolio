import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <Fragment>
    <h1>Oops, page not found!</h1>
    <Link to="/">Return home</Link>
  </Fragment>
);

export default NotFound;
