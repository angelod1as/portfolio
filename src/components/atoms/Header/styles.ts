import theme from '@styles/theme'
import styled, { css } from 'styled-components'
const { size } = theme

export const Container = styled.div<{ slim: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  ${p => p.theme.loop.colorLoop('background-color')};
  color: ${p => p.theme.color.white};

  height: 480px;
  padding-left: 40px;
  padding-right: 40px;

  margin-bottom: 50px;

  ${p =>
    p.slim &&
    css`
      padding: 0 40px;
      height: 85px;
      justify-content: flex-start;
    `}

  @media ${size.medium} {
    display: block;
    height: 100%;
    width: 100%;
    padding: 20px;
  }
`

export const BackWrapper = styled.div<{ slim: boolean }>`
  position: absolute;
  top: 30px;
  left: 30px;
  @media ${size.medium} {
    position: relative;
    top: unset;
    left: unset;
  }
`

export const Title = styled.div<{ slim: boolean }>`
  font-family: 'Montserrat Alternates', 'Montserrat', sans-serif;
  font-size: ${p => (p.slim ? '40px' : '48px')};
  line-height: 53px;
  max-width: 385px;
  margin-left: ${p => (p.slim ? '80px' : 0)};
  margin-bottom: 8px;
  span {
    font-style: italic;
  }

  @media ${size.medium} {
    font-size: 40px;

    margin-top: 40px;
    max-width: 100%;
  }
`

export const ExcerptWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;

  @media ${size.medium} {
    display: block;
  }
`

export const ExcerptTitle = styled.div`
  font-family: 'Montserrat Alternates', 'Montserrat', sans-serif;
  font-size: 48px;
  line-height: 120%;

  @media ${size.medium} {
    margin-top: 40px;
    font-size: 30px;
  }
`

export const ExcerptSubtitle = styled.div`
  font-family: 'Montserrat Alternates', 'Montserrat', sans-serif;
  font-size: 24px;
  line-height: 34px;

  @media ${size.medium} {
    font-size: 20px;
  }
`

export const ExcerptText = styled.div`
  max-width: 380px;
  margin: 15px 0;
  font-weight: 300;
  font-size: 20px;
  line-height: 120%;
  text-align: right;

  @media ${size.medium} {
    text-align: left;
    font-size: 18px;
  }
`
