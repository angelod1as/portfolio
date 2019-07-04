import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Link from '../../components/Link';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const Opening = () => {
  return (
    <Fade>
      <Container className="opening">
        {/* <Flags /> */}
        <Title>My name is angelo and I do stuff</Title>
        <Text>Journalist turned designer turned developer.</Text>
        <Text>
          Spent 5 years at Folha de S.Paulo designing print, thinking infographics and writing code.
          Simultaneously, created and maintained a satyrical sci-fi newspaper.
        </Text>
        <List>
          <Link direction="left" to="/portfolio">
            Portfolio
          </Link>
          <Link direction="left" to="/about">
            About me
          </Link>
        </List>
      </Container>
    </Fade>
  );
};

export default Opening;
