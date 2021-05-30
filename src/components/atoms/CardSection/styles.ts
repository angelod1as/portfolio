import styled, { css } from 'styled-components'
import AnimateHeight from 'react-animate-height'

export const Title = styled.h2<{ collapsed: boolean }>`
  cursor: pointer;
  margin: 0 0 0 30px;
  width: fit-content;
  position: relative;
  ${p => p.theme.loop.colorLoop('color')}

  ${p =>
    p.collapsed
      ? css`
          &:before {
            content: '‹';
            position: absolute;
            left: -24px;
            transform: rotate(-90deg);
          }
          &:hover {
            &:before {
              content: '«';
              left: -27px;
            }
          }
        `
      : css`
          &:before {
            content: '‹';
            position: absolute;
            left: -18px;
            transform: rotate(90deg);
          }
          &:hover {
            &:before {
              content: '«';
              left: -21px;
            }
          }
        `}
`

export const CardWrapper = styled.div`
  margin: 30px 0 30px 30px;
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
`

export const StyledAnimateHeight = styled(AnimateHeight)`
  ${p =>
    p.height !== 'auto' &&
    css`
      box-shadow: 0px 10px 0px ${p => p.theme.color.black};
      cursor: pointer;
      position: relative;
      transition: box-shadow 0.2s ease-out;
      &:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 10px;
        width: 100%;
        background-color: ${p => p.theme.color.black};
      }

      &:hover {
        box-shadow: 0px 15px 0px ${p => p.theme.color.black};
      }
    `}
`
