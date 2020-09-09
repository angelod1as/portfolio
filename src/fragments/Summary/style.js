import styled from 'styled-components';
import Html from '../../components/html-styles';

export const Content = styled(Html)`
  padding-bottom: 0;

  .see-it-live {
    text-decoration: none;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s;
    color: ${p => p.theme.color.white};
    background-color: ${p => p.color};
    border: 0;
    border-radius: 0;
    text-align: center;
    padding: 10px;
    margin: 20px 0;
    &:hover {
      transform: translate(5px, -5px);
      box-shadow: -5px 5px 0px 0px rgba(0, 0, 0, 0.75);
    }
  }

  *:first-child {
    margin-top: 0;
  }

  transition: all 0.2s cubic-bezier(0, 1, 0, 1);
  overflow: hidden;
  position: relative;
  max-width: 920px;
  &:after {
    transition: background-image 0.2s cubic-bezier(0, 1, 0, 1);
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;

    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 100%
    );
  }

  &.closed {
    max-height: 150px;
  }

  &.open {
    &:after {
      height: 0px;
    }
  }
`;

export const OpenSummaryButton = styled.button`
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;
  color: ${p => p.theme.color.white};
  background-color: ${p => p.color};
  border: 0;
  border-radius: 0;
  width: 100%;
  text-align: center;
  padding: 10px;
  margin: 0 0 50px 0;
  &:hover {
    transform: translate(5px, -5px);
    box-shadow: -5px 5px 0px 0px rgba(0, 0, 0, 0.75);
  }
`;
