import { MDX } from '#components/common/MDX'
import React from 'react'

export type PodcastProps = {
  compiledSource: string
}

const components = {}

export const Podcast = ({ compiledSource }: PodcastProps) => {
  return (
    <MDX
      mdx={{ components, compiledSource }}
      bgColor="bg-yellow"
      textColor="text-yellow"
    />
  )
}
