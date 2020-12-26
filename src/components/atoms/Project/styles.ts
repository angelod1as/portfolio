import styled, { css } from 'styled-components'

export const Wrapper = styled.a<{ horizontal: boolean }>`
  transition: opacity 0.2s ease;
  text-decoration: none;
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  ${p =>
    p.horizontal &&
    css`
      flex-direction: row;

      img {
        width: 50%;
        margin-right: 10px;
      }

      div {
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
