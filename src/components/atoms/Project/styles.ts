import theme from '@styles/theme'
import styled, { css } from 'styled-components'
const { size } = theme

export const Wrapper = styled.a<{ embed: boolean }>`
  transition: opacity 0.2s ease;
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

      img {
        width: 50%;
        margin-right: 10px;
      }

      @media ${size.small} {
        display: block;
        img {
          width: 100%;
          margin-right: 0;
        }
      }
    `}

  &:hover {
    opacity: 0.6;
  }
`

export const Image = styled.img`
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
  ${p => p.theme.loop.colorLoop('color')}
`

export const Lead = styled.p`
  font-size: 16px;
  line-height: 22px;
  margin: 7px 0 0 0;

  span {
    font-size: 14px;
    font-style: italic;
    white-space: nowrap;
  }
`
