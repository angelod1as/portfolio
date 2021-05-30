import styled from 'styled-components'

export const TagWrapper = styled.div`
  background-color: ${p => p.theme.color.white};
  border: 1px dotted ${p => p.theme.color.black};
  padding: 8px 10px;
  width: fit-content;
  font-size: 0.8rem;
  font-weight: 300;
`
