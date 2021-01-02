import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const StyledHome = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 25px;
  cursor: pointer;
  text-transform: lowercase;
  color: ${p => p.theme.color.black};

  &:before {
    transition: left 0.3s ease;
    content: '‹';
    position: absolute;
    left: -8px;
  }

  &:hover {
    &:before {
      left: -4px;
      content: '«';
    }
  }
`
