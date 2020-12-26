import styled from 'styled-components'
import { BackProps } from '.'

export const StyledBack = styled.button<BackProps>`
  position: relative;
  background-color: transparent;
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 25px;
  padding-left: 15px;
  transition: padding 0.3s ease;
  cursor: pointer;
  color: ${p => (p.inverted ? p.theme.color.white : p.theme.color.black)};

  &:before {
    content: '‹';
    position: absolute;
    left: 0;
  }

  &:hover {
    padding-left: 12px;
    &:before {
      content: '«';
    }
  }
`
