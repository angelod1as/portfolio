import styled, { css } from 'styled-components'

interface StyledProps {
  backgroundColor: string
  inverted: boolean
  icon: string
}

export const Container = styled.div`
  position: relative;
`
export const InputLabel = styled.label<StyledProps>`
  margin-bottom: 5px;
  display: block;

  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  ${p =>
    p.inverted &&
    css<StyledProps>`
      color: ${p.theme.color.white};
    `}
`

export const InputWrapper = styled.div<StyledProps>`
  position: relative;
  display: flex;
  align-items: center;

  border-radius: ${p => p.theme.numbers.radius};

  ${p =>
    p.inverted
      ? css<StyledProps>`
          border: 2px solid ${p => p.theme.color.white};
          background-color: ${p => p.backgroundColor};
        `
      : css<StyledProps>`
          border: 2px solid ${p => p.backgroundColor};
          background-color: ${p => p.theme.color.white};
        `}
`

export const Icon = styled.div`
  position: absolute;
  top: 18px;
  left: 20px;
  margin-right: 5px;
  display: flex;
  justify-content: center;
`

export const StyledInput = styled.input<StyledProps>`
  background-color: transparent;
  border: none;
  width: 100%;
  padding: 20px;

  ${p =>
    p.inverted &&
    css<StyledProps>`
      color: ${p.theme.color.white};
    `}

  ${p =>
    p.icon && p.icon !== 'none' && p.icon !== ''
      ? css`
          padding-left: 50px;
        `
      : ''}
`
