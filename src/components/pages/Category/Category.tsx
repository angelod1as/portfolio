import { MDX } from '#components/common/MDX/MDX'
import { NewHead } from '#components/common/NewHead'
import { ProjectTile } from '#components/common/ProjectTile'
import { ProjectTileProps } from '#types/types'
import React from 'react'
import { VerbObject } from 'src/helpers/verbs'

export type CategoryProps = {
  category: VerbObject
  compiledSource: string
  latest: ProjectTileProps[]
  highlighted: ProjectTileProps[]
}

export const Category = ({
  category: { color, title },
  compiledSource,
  highlighted,
  latest,
}: CategoryProps) => {
  const components = {
    strong: (props: JSX.IntrinsicElements['strong']) => (
      <b className={color} {...props} />
    ),
  }

  return (
    <>
      <NewHead title={title} />

      <h1>
        I'm angelo and I do <span className={color}>{title}</span>
      </h1>

      <MDX compiledSource={compiledSource} components={components} />

      {highlighted?.length > 0 && (
        <div>
          <h2 className="mb-8">Highlighted projects:</h2>

          <div className="project-mosaic">
            {highlighted.map(project => (
              <ProjectTile key={project.title} {...project} />
            ))}
          </div>
        </div>
      )}

      {latest?.length > 0 && (
        <div>
          <h2 className="mb-8">Latest projects:</h2>

          <div className="px-4 md:px-10 project-mosaic full-width">
            {latest.map(project => (
              <ProjectTile key={project.title} {...project} />
            ))}
          </div>
        </div>
      )}
    </>
  )
}
