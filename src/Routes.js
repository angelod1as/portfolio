import React from 'react';
// import PropTypes from 'prop-types';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Loading from './components/Loading';

const Home = Loadable({
  loader: () => import('./pages/Home'),
  loading: Loading,
});

const About = Loadable({
  loader: () => import('./pages/About'),
  loading: Loading,
});

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      {/* Finally, catch all unmatched routes */}
      {/* <Route component={AsyncNotFound} /> */}
    </Switch>
  </Router>
);

// App.propTypes = {
//   childProps,
// };

export default App;
