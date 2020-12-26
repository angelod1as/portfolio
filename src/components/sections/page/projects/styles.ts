import theme from '@styles/theme'
import styled from 'styled-components'
const { size } = theme

export const Wrapper = styled.div`
  margin: 0 50px;
`
export const H2 = styled.h2`
  ${p => p.theme.loop.colorLoop('color')}
  margin-bottom: 40px;
`

export const Mosaic = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 50px;

  @media ${size.small} {
    display: block;
    & > div {
      margin: 50px 0;
    }
  }
`

export const ProjectHolder = styled.div``
