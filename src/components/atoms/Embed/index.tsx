import styled from 'styled-components'

interface EmbedProps {
  embed: string
}

const DangerDiv = styled.div`
  width: 100%;
  iframe {
    width: 100%;
  }
  margin: 20px 0;
`

export default function Embed({ embed }: EmbedProps) {
  return <DangerDiv dangerouslySetInnerHTML={{ __html: embed }}></DangerDiv>
}
