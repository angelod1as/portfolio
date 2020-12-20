import Button from '@components/atoms/Button'
import theme from '@styles/theme'
import styled from 'styled-components'

export default function Custom404() {
  const colors = theme.tileColors
  const color = colors[Math.floor(Math.random() * colors.length)]

  return (
    <Wrapper backgroundColor={color}>
      <h1>
        I'm angelo and
        <br />
        <span>this page does not exist</span>
      </h1>
      <Button inverted backgroundColor={color} to="/">
        Click here to go back
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ backgroundColor: string }>`
  h1 {
    max-width: 620px;
    text-align: center;
    span {
      font-style: italic;
    }
  }
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${p => p.theme.color.white};
  background-color: ${p => p.backgroundColor};
`
