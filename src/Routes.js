import React, { Component, Fragment } from 'react';
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
    gray: '#CCCCCC',
  },
  font: {
    display: 'Montserrat Alternates',
    text: 'Montserrat',
  },
};
class App extends Component {
  constructor() {
    super();

    this.state = {
      activeLanguage: 'english',
    };

    this.changeLanguage = this.changeLanguage.bind(this);
  }

  changeLanguage({ title }) {
    this.setState({ activeLanguage: title });
  }

  render() {
    const { activeLanguage } = this.state;
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <Fragment>
            <GlobalStyle />
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <Container
                    left={<Opening changeLanguage={this.changeLanguage} active={activeLanguage} />}
                    right={<Menu />}
                    center
                  />
                )}
              />
              <Route
                exact
                path="/about"
                render={() => <Container left={<AboutSidebar />} right={<About />} />}
              />
              {/* Finally, catch all unmatched routes */}
              {/* <Route component={AsyncNotFound} /> */}
            </Switch>
          </Fragment>
        </ThemeProvider>
      </Router>
    );
  }
}

// App.propTypes = {
//   childProps,
// };

export default App;
