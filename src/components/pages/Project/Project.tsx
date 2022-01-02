import { MDX } from '#components/common/MDX/MDX'
import { Tags } from '#components/common/Tags'
import { ProjectFullData } from '#types/types'
import React from 'react'

export type ProjectProps = {
  project: ProjectFullData
}

export const Project = ({
  project: {
    data: { title, date, tags, toc },
    compiledSource,
  },
}: ProjectProps) => {
  return (
    <>
      <h1>{title}</h1>

      <Tags tags={tags} />

      {/* TODO: Make TOC better by turning strings into contained arrays */}
      {/* And iterate recusively to create ul and li */}
      {/* <TOC toc={toc} /> */}

      <MDX compiledSource={compiledSource} />

      <div>
        <h2>Share this</h2>
      </div>

      <div>
        <h2>Possibly related</h2>
      </div>
    </>
  )
}
