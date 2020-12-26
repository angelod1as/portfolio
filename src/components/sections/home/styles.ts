import { theme } from '@styles/theme'
import NextLink from 'next/link'
import styled from 'styled-components'

const { size } = theme

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
`

export const Link = styled(NextLink)`
  cursor: pointer;
`

export const Tile = styled.a`
  display: block;
  width: 100%;
  padding-bottom: 100%;
  position: relative;
  cursor: pointer;
  color: ${p => p.theme.color.white};
  background-color: ${p => p.theme.color.white};
  &:hover {
    color: ${p => p.theme.color.white};
  }
`

export const Inside = styled.div`
  background-color: ${p => p.color};
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10%;
  transition: 0.2s transform;

  &:hover {
    transform: scale(0.98);
  }
`

export const Text = styled.p`
  margin: 0;
  padding: 0;
  font-weight: bold;
  font-size: 3em;
  font-family: ${p => p.theme.font.display};
`

export const Small = styled(Text)`
  font-size: 1.5em;
  @media ${size.largest} {
    font-size: 1.2em;
  }
`

export const Big = styled(Text)`
  line-height: 1.1em;
  @media ${size.largest} {
    font-size: 2.3em;
  }
`
