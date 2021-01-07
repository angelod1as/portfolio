import styled from 'styled-components'

export const Figure = styled.figure<{ contain: boolean }>`
  display: flex;
  max-width: ${p => (p.contain ? '620px' : '100%')};
  & > div {
    max-width: ${p => (p.contain ? '620px' : '100%')};
  }
  &.not-mosaic {
    display: block;
  }

  @media ${p => p.theme.size.medium} {
    display: block;
  }
`

export const Mosaic = styled.div`
  max-width: 100%;
  width: 100%;
  figure {
    img {
      flex: 1;
      display: block;
    }
  }
`
