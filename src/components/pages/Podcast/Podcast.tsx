import { MDX } from '#components/common/MDX'
import React from 'react'

export type PodcastProps = {
  compiledSource: string
}

export const Podcast = ({ compiledSource }: PodcastProps) => {
  return (
    <MDX mdx={{ compiledSource }} bgColor="bg-yellow" textColor="text-yellow" />
  )
}
