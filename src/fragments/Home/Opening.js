import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import uuid from 'uuid/v1';
import Link from '../../components/Link';
import Main from '../../layouts/Main';
import size from '../../components/breakpoints';

import Github from '../../svg/social/github.svg';
import Linkedin from '../../svg/social/linkedin.svg';
import Whatsapp from '../../svg/social/whatsapp.svg';

const Container = styled.div`
  & > * {
    margin: 10px 0;
  }

  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${size.medium} {
    max-width: 600px;
    margin: 0 auto;
  }
`;

const Title = styled.h1`
  margin-top: 0;
  font-size: 3em;
  font-weight: 700;
  color: ${p => p.theme.color.color};
  max-width: 600px;
`;

const Text = styled.p`
  max-width: 600px;
`;

const Social = styled.figure`
  svg {
    width: 2em;
    height: auto;
    fill: ${p => p.theme.color.darkgray};
    margin: 0 20px;
    &:first-child {
      margin-left: 0;
    }
  }
  a:hover {
    transform: none;
    transform: scale(0.97);
    svg {
      fill: ${p => p.theme.color.color};
    }
  }
`;

const List = styled.div`
  font-size: 1.2em;
  margin-bottom: 0;
  a {
    /* color: ${p => p.theme.color.black}; */
    display: block;
    margin-bottom: 10px;
  }
`;

const Opening = () => {
  const social = [
    [<Github />, 'https://github.com/angelod1as'],
    [<Linkedin />, 'https://www.linkedin.com/in/angelod1as/'],
    [<Whatsapp />, 'https://wa.me/5511985554639'],
  ];
  return (
    <Main>
      <Container>
        {/* <Flags /> */}
        <Title>My name is angelo and I do stuff</Title>
        <Text>Journalist turned designer turned developer.</Text>
        <Text>
          Spent 5 years at Folha de S.Paulo designing print, thinking infographics and writing code.
          Simultaneously, created and maintained a satyrical sci-fi newspaper.
        </Text>
        <Social>
          {social.map(s => (
            <a href={s[1]} target="_blank" rel="noreferrer noopener" key={uuid()}>
              {s[0]}
            </a>
          ))}
        </Social>
        <List>
          <Link direction="left" to="/portfolio">
            Portfolio
          </Link>
          <Link direction="left" to="/about">
            About
          </Link>
        </List>
      </Container>
    </Main>
  );
};

export default Opening;
