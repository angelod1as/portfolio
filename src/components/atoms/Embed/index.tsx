import styled from 'styled-components'

interface EmbedProps {
  embed: string
}

const DangerDiv = styled.div``

export default function Embed({ embed }: EmbedProps) {
  return <DangerDiv dangerouslySetInnerHTML={{ __html: embed }}></DangerDiv>
}
