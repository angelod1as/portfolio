import styled from 'styled-components'

export const Figure = styled.figure<{ contain: boolean }>`
  max-width: ${p => (p.contain ? '620px' : '100%')};
  & > div {
    max-width: ${p => (p.contain ? '620px' : '100%')};
  }
`

export const Mosaic = styled.div`
  max-width: 100%;
  width: 100%;
  figure {
    display: flex;
    img {
      flex: 1;
      display: block;
    }
  }
`
