import styled from 'styled-components'

export const Wrapper = styled.a`
  transition: opacity 0.2s ease;
  text-decoration: none;
  cursor: pointer;
  width: 100%;
  height: auto;

  &:hover {
    opacity: 0.6;
  }
`

export const Image = styled.img`
  width: 100%;
  height: auto;
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
