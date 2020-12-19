import styled from 'styled-components'

interface StyledProps {
  backgroundColor: string
}

export const Wrapper = styled.div`
  margin: 0 50px;
`
export const H2 = styled.h2<StyledProps>`
  color: ${p => p.backgroundColor};
  margin-bottom: 40px;
`

export const Mosaic = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 50px;
`

export const ProjectHolder = styled.div``
