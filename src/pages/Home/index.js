import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from '../../components/GlobalStyle';

const theme = {
  primary: 'red',
  font: {
    display: 'Montserrat Alternates',
    text: 'Montserrat',
  },
};

const Main = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.primary};
  font-family: ${props => props.theme.font.display};
`;

const Home = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Main>
        <div>OI EU SOU A HOME!</div>
      </Main>
    </ThemeProvider>
  </div>
);

export default Home;
