import styled, { css } from 'styled-components'

export const ButtonWrapper = styled.div`
  margin: 0 0 20px 0;
  position: relative;
  max-width: 400px;
  width: 100%;
`
interface StyledProps {
  backgroundColor: string
  borderless: boolean
  inverted: boolean
}

export const ExternalLink = styled.a`
  text-decoration: none;
  display: block;
`

export const ButtonStyle = styled.button<StyledProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  font-family: 'Montserrat Alternates', 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  color: ${p => p.backgroundColor};

  z-index: 1;
  padding: 20px;
  width: 100%;

  ${p => {
    if (p.borderless && p.inverted) {
      return css<StyledProps>`
        border: 2px solid ${p => p.backgroundColor};
        background-color: ${p => p.backgroundColor};
        color: ${p => p.theme.color.white};
      `
    } else if (p.borderless) {
      return css<StyledProps>`
        border: 2px solid ${p => p.theme.color.white};
        background-color: ${p => p.theme.color.white};
      `
    } else if (p.inverted) {
      return css<StyledProps>`
        border: 2px solid ${p => p.theme.color.white};
        background-color: ${p => p.backgroundColor};
        color: ${p => p.theme.color.white};
      `
    } else {
      return css<StyledProps>`
        border: 2px solid ${p => p.backgroundColor};
        border-radius: ${p => p.theme.numbers.radius};
        background-color: ${p => p.theme.color.white};
      `
    }
  }}

  transition: transform 0.1s;

  &:hover {
    transform: translate(10px, -10px);
  }
`
export const ButtonBg = styled.div<StyledProps>`
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: ${p => p.theme.numbers.radius};
  ${p =>
    p.inverted
      ? css<StyledProps>`
          border: 2px solid ${p => p.theme.color.white};
          background-color: ${p => p.theme.color.white};
        `
      : css<StyledProps>`
          border: 2px solid ${p => p.backgroundColor};
          background-color: ${p => p.backgroundColor};
        `}
`

export const Icon = styled.div`
  margin-right: 5px;
  display: flex;
  justify-content: center;
`
