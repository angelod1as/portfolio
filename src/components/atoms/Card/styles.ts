import styled, { css } from 'styled-components'

export const CardWrapper = styled.div<{ link?: string }>`
  width: 300px;
  min-height: 300px;
  background-color: ${p => p.theme.color.white};
  border: 2px solid ${p => p.theme.color.black};
  box-sizing: border-box;
  box-shadow: 4px 4px 0px ${p => p.theme.color.black};
  transition: box-shadow 0.2s ease-out;
  position: relative;
  ${p =>
    p.link &&
    css`
      cursor: pointer;
      &:hover {
        box-shadow: 8px 8px 0px ${p => p.theme.color.black};
      }
    `}
`

export const LinkIcon = styled.div`
  position: absolute;
  top: -2px;
  right: -2px;
  background-color: ${p => p.theme.color.white};
  border: 2px solid ${p => p.theme.color.black};
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ImageWrapper = styled.div`
  width: 100%;
  height: 150px;
  border-bottom: 3px solid ${p => p.theme.color.black};
  ${p => p.theme.loop.colorLoop('background-color, color')}
  overflow: hidden;
  & img {
    width: 100%;
    height: auto;
  }
`

export const Content = styled.div`
  padding: 5px;
`

export const Title = styled.h3`
  ${p => p.theme.loop.colorLoop('color')}
  margin: 0;
`

export const Description = styled.p`
  margin: 0;
`

export const TagWrapper = styled.div`
  margin: 10px 0 5px 0;
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
`
