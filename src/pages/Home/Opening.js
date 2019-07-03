import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import { ReactComponent as Brazil } from '../../images/flags/brazil.svg';
import { ReactComponent as Usa } from '../../images/flags/usa.svg';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Flags = styled.div`
  button {
    font-size: 0;
    border: 0;
    background: none;
    padding: 0;
    width: 30px;
    height: auto;
    margin-right: 10px;
    cursor: pointer;
    outline: none;
    & > * {
      pointer-events: none;
    }
    svg {
      fill: ${p => p.theme.color.gray};
      transition: fill 0.2s, transform 0.2s;
    }
    &.active svg {
      fill: ${p => p.theme.color.color};
    }
    &:hover svg {
      fill: ${p => p.theme.color.black};
      transform: skewX(-15deg);
    }
  }
`;

const Title = styled.h1`
  font-size: 3em;
  font-weight: 700;
  color: ${p => p.theme.color.color};
  max-width: 600px;
`;

const Text = styled.p`
  max-width: 600px;
`;

const List = styled.div`
  margin-top: 20px;
  font-size: 1.2em;
  a {
    /* color: ${p => p.theme.color.black}; */
    display: block;
    margin-bottom: 10px;
  }
`;

const Opening = ({ changeLanguage, active }) => {
  return (
    <Fade delay={400}>
      <Container className="opening">
        <Flags>
          <button
            title="english"
            type="button"
            className={active === 'english' ? 'active' : null}
            onClick={e => changeLanguage(e.target)}
          >
            <Usa />
          </button>
          <button
            title="portugues"
            type="button"
            className={active === 'portugues' ? 'active' : null}
            onClick={e => changeLanguage(e.target)}
          >
            <Brazil />
          </button>
        </Flags>
        <Title>My name is angelo and I do stuff</Title>
        <Text>Journalist turned designer turned developer.</Text>
        <Text>
          Spent 5 years at Folha de S.Paulo designing print, thinking infographics and writing code.
          Simultaneously, created and maintained a satyrical sci-fi newspaper.
        </Text>
        <List>
          <Link to="portfolio">Portfolio</Link>
          <Link to="about">About me</Link>
        </List>
      </Container>
    </Fade>
  );
};

Opening.propTypes = {
  changeLanguage: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired,
};

export default Opening;
