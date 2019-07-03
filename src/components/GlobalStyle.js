import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${normalize}
  body {
    @import url('https://fonts.googleapis.com/css?family=Montserrat+Alternates:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i|Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap');
    font-family: 'Montserrat', sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
  }
  p, ul, li {
    font-family: Montserrat, sans-serif;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.4em;
    margin-bottom: 1em;
  }

  h1 {
    line-height: 1.3em;
  }

  h2 {
    font-size: 1.5em;
  }

  a {
    display: inline-block;
    color: ${p => p.theme.color.color};
    font-weight: 700;
    transition: color .2s, transform .2s;
    text-decoration: none;
    &:hover {
      transform: skewX(-15deg);
      color: ${p => p.theme.color.black};
    }
  }
  &.bg {
    color: ${p => p.theme.color.white};
    &:hover {
      color: ${p => p.theme.color.gray};
    }
  }

  .sidebar {
    max-width: 300px;
  }
`;

export default GlobalStyle;
