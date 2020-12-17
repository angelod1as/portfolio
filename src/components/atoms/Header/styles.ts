import styled, { css } from 'styled-components'

export const Container = styled.div<{ backgroundColor: string; slim: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background-color: ${p => p.backgroundColor};
  color: ${p => p.theme.color.white};

  height: 480px;
  padding: 40px;

  ${p =>
    p.slim &&
    css`
      padding: 0 40px;
      height: 85px;
      justify-content: flex-start;
    `}
`

export const BackWrapper = styled.div<{ slim: boolean }>`
  position: absolute;
  top: 30px;
`

export const Title = styled.div<{ slim: boolean }>`
  font-family: 'Montserrat Alternates', 'Montserrat', sans-serif;
  font-size: ${p => (p.slim ? '40px' : '48px')};
  line-height: 53px;
  max-width: 350px;
  margin-left: ${p => (p.slim ? '80px' : 0)};
  margin-bottom: 8px;
  span {
    font-style: italic;
  }
`

export const ExcerptWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`

export const ExcerptTitle = styled.div`
  font-family: 'Montserrat Alternates', 'Montserrat', sans-serif;
  font-size: 48px;
  line-height: 53px;
`

export const ExcerptSubtitle = styled.div`
  font-family: 'Montserrat Alternates', 'Montserrat', sans-serif;
  font-size: 24px;
  line-height: 34px;
`

export const ExcerptText = styled.div`
  max-width: 380px;
  margin: 15px 0;
  font-weight: 300;
  font-size: 20px;
  line-height: 25px;
  text-align: right;
`
