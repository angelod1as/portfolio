import { theme } from '@styles/theme'
import styled from 'styled-components'
const { size } = theme

export const Grid = styled.div<{ backgroundColor: string }>`
  color: ${props => props.theme.color.black};
  background-color: ${props => props.theme.color.white};
  font-family: ${props => props.theme.font.display};
  height: 100%;

  display: grid;
  grid-template-areas: 'sidebar content content';
  grid-template-columns: 400px 620px 1fr;
  grid-gap: 40px;
  position: relative;
  margin: 0 40px;

  @media ${size.medium} {
    display: block;
    height: 100%;
  }
`

export const Sidebar = styled.div``

export const Content = styled.div`
  grid-area: content;

  * {
    max-width: 620px;
  }

  figure,
  img {
    max-width: 100%;
    width: 100%;
    height: auto;
  }

  figure {
    margin-bottom: 40px;
  }

  @media ${size.medium} {
    display: block;
    width: 100%;
  }
`
