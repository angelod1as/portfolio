import React from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/GlobalStyle';

import { Container, Opening, Menu, AboutSidebar, About } from './components/Loadable';

const theme = {
  color: {
    color: '#19006A',
    white: '#F4F4F4',
    black: '#333333',
  },
  font: {
    display: 'Montserrat Alternates',
    text: 'Montserrat',
  },
};

const App = () => (
  <Router>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" render={() => <Container left={<Opening />} right={<Menu />} />} />
        <Route
          exact
          path="/about"
          render={() => <Container left={<AboutSidebar />} right={<About />} />}
        />
        {/* Finally, catch all unmatched routes */}
        {/* <Route component={AsyncNotFound} /> */}
      </Switch>
    </ThemeProvider>
  </Router>
);

// App.propTypes = {
//   childProps,
// };

export default App;
