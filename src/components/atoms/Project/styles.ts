import theme from '@styles/theme'
import styled, { css } from 'styled-components'
const { size } = theme

export const Wrapper = styled.a<{ embed: boolean }>`
  text-decoration: none;
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  ${p =>
    p.embed &&
    css`
      margin: 40px 0;
      flex-direction: row;

      div:first-child {
        width: 50%;
        margin-right: 20px;
      }

      @media ${size.small} {
        display: block;
        div:first-child {
          width: 100%;
          margin-right: 0;
          margin-bottom: 15px;
        }
      }
    `}

  &:hover {
    img {
      transform: translate(10px, -10px);
    }
    h3,
    p,
    small {
      opacity: 0.7;
    }
  }
`

export const ImageWrapper = styled.div`
  background-color: ${p => p.theme.loop.colorLoop('background-color')};
`

export const Image = styled.img`
  display: block;
  z-index: 1;
  transition: transform 0.2s ease;

  width: 100%;
  height: auto;
`
export const ImageNotFound = styled.div`
  background-color: ${p => p.theme.loop.colorLoop('background-color')};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Caption = styled.div`
  display: block;
  text-align: left;
`

export const H3 = styled.h3`
  font-size: 21px;
  line-height: 25px;
  margin: 15px 0 0 0;
  ${p => p.theme.loop.colorLoop('color')};
  transition: opacity 0.2s ease;
`

export const Lead = styled.p`
  font-size: 16px;
  line-height: 22px;
  margin: 7px 0 0 0;
  transition: opacity 0.2s ease;
  span {
    font-size: 14px;
    font-style: italic;
    white-space: nowrap;
  }
`

export const Small = styled.small`
  display: block;
  font-size: 14px;
  line-height: 22px;
  margin: 15px 0 0 0;
  transition: opacity 0.2s ease;

  @media ${size.small} {
    margin: 7px 0 0 0;
  }
`
