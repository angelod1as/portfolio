import styled from 'styled-components'

export const ButtonWrapper = styled.div`
  position: relative;
  max-width: 300px;
`

export const ButtonStyle = styled.button<{ backgroundColor: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-family: 'Montserrat Alternates', 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  color: ${(p) => p.backgroundColor};

  z-index: 1;
  padding: 20px;
  width: 100%;

  border: 2px solid ${(p) => p.backgroundColor};
  border-radius: ${(p) => p.theme.numbers.radius};
  background-color: ${(p) => p.theme.color.white};

  transition: transform 0.1s;

  &:hover {
    transform: translate(10px, -10px);
  }
`
export const ButtonBg = styled.div<{ backgroundColor: string }>`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid ${(p) => p.backgroundColor};
  border-radius: ${(p) => p.theme.numbers.radius};
  background-color: ${(p) => p.backgroundColor};
`

export const Icon = styled.div`
  margin-right: 5px;
  display: flex;
  justify-content: center;
`
