import React from 'react';
// import PropTypes from 'prop-types';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Loading from './components/Loading';

const Container = Loadable({
  loader: () => import('./pages/Container'),
  loading: Loading,
});

const About = Loadable({
  loader: () => import('./pages/About'),
  loading: Loading,
});

const Opening = Loadable({
  loader: () => import('./pages/Home/Opening'),
  loading: Loading,
});

const Menu = Loadable({
  loader: () => import('./pages/Home/Menu'),
  loading: Loading,
});

const App = () => (
  <Router>
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <Container left={<Opening />} right={<Menu />} division="center" bg="right" />
        )}
      />
      {/* Finally, catch all unmatched routes */}
      {/* <Route component={AsyncNotFound} /> */}
    </Switch>
  </Router>
);

// App.propTypes = {
//   childProps,
// };

export default App;
