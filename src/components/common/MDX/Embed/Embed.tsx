import React from 'react'
import ResponsiveEmbed from 'react-responsive-embed'

export type EmbedProps = { ratio?: string } & JSX.IntrinsicElements['iframe']

export const Embed = ({ allowFullScreen = true, ...props }: EmbedProps) => {
  return (
    <div className="">
      <ResponsiveEmbed {...props} allowFullScreen={allowFullScreen} />
    </div>
  )
}
