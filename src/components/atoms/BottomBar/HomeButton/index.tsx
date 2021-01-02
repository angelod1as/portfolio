import { useRouter } from 'next/router'
import { StyledHome, Wrapper } from './styles'

export default function HomeButton() {
  const { push, asPath } = useRouter()

  if (asPath !== '/') {
    return (
      <Wrapper>
        <StyledHome onClick={() => push('/')}>Home</StyledHome>
      </Wrapper>
    )
  }
  return <div />
}
