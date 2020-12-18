import styled from 'styled-components'

interface StyleProps {
  backgroundColor: string
}

export const FooterWrapper = styled.div<StyleProps>`
  display: flex;
  justify-content: space-between;
  background-color: ${p => p.backgroundColor};
  padding: 0 20px;
  & > * {
    max-width: 350px;
  }
`

export const Title = styled.h3`
  text-transform: lowercase;
  font-family: 'Montserrat Alternates', 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 48px;
  color: ${p => p.theme.color.white};
  margin-bottom: 30px;
  span {
    font-style: italic;
  }
`

export const BlogPosts = styled.div``

export const Post = styled.a`
  text-decoration: none;
  color: ${p => p.theme.color.white};
  margin-bottom: 20px;
  cursor: pointer;

  h4 {
    font-weight: 700;
    font-size: 21px;
    line-height: 25px;
    margin: 0;
  }
  p {
    margin: 10px 0 0 0;
    span {
      margin-left: 10px;
      font-style: italic;
      font-size: 0.8em;
      opacity: 0.8;
    }
  }

  &:hover {
    color: ${p => p.theme.color.white};
    opacity: 0.5;
  }
`

export const Newsletter = styled.div``

export const Social = styled.div``
