import styled, { keyframes } from 'styled-components'

const rotation = keyframes`
{
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
`

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.9);
`

export const Word = styled.h2`
  margin: 10px 0 0 0;
  padding: 0;
  color: ${p => p.theme.color.white};
`

export const Square = styled.div`
  width: 50px;
  height: 50px;
  animation: ${rotation} 2s infinite ease-in-out;

  transform: rotate(360deg);
`

export const BG = styled.div`
  width: 100%;
  height: 100%;
  ${p => p.theme.loop.colorLoop('background-color', 0.5)}
`
