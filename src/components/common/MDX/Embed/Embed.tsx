import { useColorContext } from '#components/templates/Providers/ColorProvider'
import React from 'react'
import ResponsiveEmbed from 'react-responsive-embed'

export type EmbedProps = {
  youtubeId?: string
  ratio?: string
} & JSX.IntrinsicElements['iframe']

export const Embed = ({
  src,
  youtubeId,
  allowFullScreen = true,
  ...props
}: EmbedProps) => {
  const { colors } = useColorContext()
  if (youtubeId) {
    src = `https://www.youtube.com/embed/${youtubeId}`
  }

  return (
    <div className={`my-8 border-4 ${colors.borderColor}`}>
      <ResponsiveEmbed {...props} src={src} allowFullScreen={allowFullScreen} />
    </div>
  )
}
