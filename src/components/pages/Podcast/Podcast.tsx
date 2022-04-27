import { MDX } from '#components/common/MDX'
import React from 'react'
import { bgColor, textColor } from 'src/helpers/colors'

export type PodcastProps = {
  compiledSource: string
}

export const Podcast = ({ compiledSource }: PodcastProps) => {
  return (
    <MDX
      mdx={{ compiledSource }}
      bgColor={bgColor[1]}
      textColor={textColor[1]}
    />
  )
}
