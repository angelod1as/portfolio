import styled from 'styled-components'

const loop = p => p.theme.loop.colorLoop('color')

export const H1 = styled.h1`
  ${p => loop(p)}
`
export const H2 = styled.h2`
  ${p => loop(p)}
`
export const H3 = styled.h3`
  ${p => loop(p)}
`
export const H4 = styled.h4`
  ${p => loop(p)}
`
export const H5 = styled.h5`
  ${p => loop(p)}
`
