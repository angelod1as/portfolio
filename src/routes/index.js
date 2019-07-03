import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../components/GlobalStyle';

import {
  Container,
  Opening,
  Menu,
  AboutSidebar,
  About,
  NotFound,
  Portfolio,
  PortfolioSidebar,
} from '../components/Loadable';

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

const Stack = ({ children }) => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyle />
          <Switch>{children}</Switch>
        </Fragment>
      </ThemeProvider>
    </Router>
  );
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      lang: 'en',
    };

    this.changeLanguage = this.changeLanguage.bind(this);
  }

  changeLanguage({ title }) {
    this.setState({ lang: title });
  }

  render() {
    const { lang } = this.state;
    return (
      <Stack>
        {/* Home */}

        <Route
          exact
          path="/"
          render={() => (
            <Container
              left={<Opening changeLanguage={this.changeLanguage} lang={lang} />}
              right={<Menu />}
              center
            />
          )}
        />
        <Route
          path="/portfolio"
          render={() => <Container left={<PortfolioSidebar />} right={<Portfolio />} />}
        />
        <Route
          exact
          path="/about"
          render={() => <Container left={<AboutSidebar />} right={<About />} />}
        />

        <Route
          render={() => (
            <Container
              left={<Opening changeLanguage={this.changeLanguage} lang={lang} />}
              right={<NotFound />}
              center
            />
          )}
        />
      </Stack>
    );
  }
}

Stack.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default App;
