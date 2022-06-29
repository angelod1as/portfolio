import React from 'react'
import { ProjectMetadata } from '#types/types'
import { useColorContext } from '#components/templates/Providers/ColorProvider'
import { MDX } from '#components/common/MDX'
import styles from './Project.module.sass'

type ProjectProps = {
  project: Partial<ProjectMetadata>
}

export const Project = ({ project }: ProjectProps) => {
  const { colors } = useColorContext()
  const { compiledTitle, compiledSummary, hero, title } = project

  const buildSection = (
    prefix: string,
    content: string | undefined,
    paragraph?: boolean
  ) => {
    if (!content) return null

    return (
      <>
        <b className={`${styles.prefix} ${colors.textColor}`}>{prefix}</b>
        <div className={styles.content}>
          {paragraph ? (
            <p>{content}</p>
          ) : (
            <MDX mdx={{ compiledSource: content }} />
          )}
        </div>
      </>
    )
  }

  return (
    <div className="grid grid-cols-[200px_1fr] gap-4 ">
      <figure className={'w-40 h-40' + ' ' + colors.bgColor}>
        {/* {project.hero?.url && (
          <Image
            src={project.hero.url}
            alt={project.hero.url}
            width={300}
            height={300}
          />
        )} */}
      </figure>
      <div>
        {compiledTitle && <MDX mdx={{ compiledSource: compiledTitle }} />}
        <div className={styles.grid}>
          {buildSection('When', compiledSummary?.when, true)}
          {buildSection('Where', compiledSummary?.where)}
          {buildSection('Who', compiledSummary?.who)}
          {buildSection('How', compiledSummary?.how)}
          {buildSection('Who', compiledSummary?.why)}
        </div>
      </div>
    </div>
  )
}
