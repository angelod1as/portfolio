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
    margin: 0 0 40px 0;
    color: ${p => p.color};
  }

  iframe + h1,
  picture + h1 {
    margin-top: 20px;
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
    height: 517px;
  }

  & > figure:first-child {
    margin-top: 0;
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
      grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
      img {
        border: 1px solid ${p => p.theme.color.gray};
      }
      &.nobg {
        img {
          border: none;
        }
      }

      &.medium {
        grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
      }

      &.large {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      }

      &.four {
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      }

      &.five {
        grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
      }
    }

    & > p {
      font-style: italic;
    }
  }
`;

export default Html;
