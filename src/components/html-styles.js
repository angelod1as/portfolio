import styled from 'styled-components';

const Html = styled.div`
  padding-bottom: 100px;
  height: 100%;
  & > * {
    max-width: 920px;
  }
  & > img {
    max-width: 100%;
  }

  *:first-child {
    margin-top: 0;
  }

  a {
    color: ${p => p.color};
  }

  hr {
    max-width: 100%;
    margin: 70px 0;
    border-top: 1px dashed ${p => p.color};
    /* opacity: 0.5; */
  }

  h1 {
    font-size: 2.5em;
    font-weight: 700;
    margin: 50px 0 40px 0;
    color: ${p => p.color};
  }

  iframe + h1,
  picture + h1 {
    margin-top: 20px;
  }

  picture {
    span {
      margin-left: 0 !important;
      margin-right: 0 !important;
    }
  }

  h2 {
    color: ${p => p.color};
    font-weight: 700;
    margin: 40px 0 20px 0;
  }

  h3 {
    font-weight: 700;
    margin: 40px 0 20px 0;
  }

  p {
    font-weight: 300;
  }

  img {
    width: 100%;
    height: auto;
  }

  iframe {
    width: 100%;
    max-width: 920px;
    &.soundcloud {
      height: initial;
    }
  }

  & > figure:first-child {
    margin-top: 0;
  }

  pre[class*='language-'] {
    & > code {
      border-color: ${p => p.color};
    }
  }

  figure {
    margin: 30px 0;
    max-width: 920px;

    &.margin {
      picture {
        span {
          margin: 20px 0;
        }
        &:first-child {
          span {
            margin-top: 0;
          }
        }
      }
    }

    &.large {
      max-width: 920px;
    }

    &.center {
      margin: 0 auto;
      text-align: center;
      & > p {
        text-align: center;
      }
    }

    &.mosaic {
      display: grid;
      grid-gap: 10px;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      img {
        border: 1px solid ${p => p.theme.color.gray};
      }
      &.nobg {
        img {
          border: none;
        }
      }

      &.medium {
        grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
      }

      &.large {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      }

      &.four {
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      }

      &.five {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      }
    }

    &.small {
      max-width: 300px;
    }

    &.medium {
      max-width: 600px;
    }

    &.big,
    &.full {
      max-width: 100%;
    }

    & > p {
      font-style: italic;
    }
  }

  ul {
    &.toc {
      &:before {
        content: 'What do you want to read about?';
        font-size: 0.9em;
      }
      li {
        margin: 5px 0;
        p,
        ul {
          margin: 0;
        }
        a {
          font-size: 0.9em;
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      margin-bottom: 30px;
    }
  }
`;

export default Html;
