import styled from 'styled-components'
import ResponsiveEmbed from 'react-responsive-embed'

const Wrapper = styled.div`
  margin: 40px 0;
  width: 100%;
  max-width: 100%;
  iframe {
    min-width: 100%;
  }
`

const Video = ({ id }) => {
  return (
    <Wrapper>
      <ResponsiveEmbed
        src={`https://www.youtube.com/embed/${id}`}
        allowFullScreen
      />
    </Wrapper>
  )
}

export default Video
