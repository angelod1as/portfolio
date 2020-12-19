import { theme } from '@styles/theme'
import styled from 'styled-components'
const { size } = theme

const width = '20%'

export const Grid = styled.div<{ backgroundColor: string }>`
  color: ${props => props.theme.color.black};
  background-color: ${props => props.theme.color.white};
  font-family: ${props => props.theme.font.display};
  height: 100%;

  display: grid;
  grid-template-areas: 'sidebar content';
  grid-template-columns: ${width} auto;
  position: relative;

  @media ${size.medium} {
    display: block;
    height: 100%;
  }
`

export const SidebarHolder = styled.div`
  grid-area: sidebar;

  padding: 40px;
  position: fixed;
  width: 20%;
  height: 100%;

  background-color: ${p => p.color};
  color: ${p => p.theme.color.white};

  @media ${size.medium} {
    display: block;
    position: relative;
    width: 100%;
    height: auto;
  }
`

export const Content = styled.div`
  grid-area: content;

  padding: 40px;
  background-color: ${p => p.theme.color.white};
  color: ${p => p.theme.color.black};

  @media ${size.medium} {
    display: block;
    width: 100%;
  }
`
