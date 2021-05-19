import ResponsiveEmbed from 'react-responsive-embed'
import { Wrapper } from './styles'

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
