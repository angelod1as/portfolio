import React from 'react'
import { ProjectMetadata } from '#types/types'
import { useColorContext } from '#components/templates/Providers/ColorProvider'
import { MDX } from '#components/common/MDX'
import styles from './Project.module.sass'
import Image from 'next/image'

type ProjectProps = {
  project: Partial<ProjectMetadata>
}

export const Project = ({ project }: ProjectProps) => {
  const { colors } = useColorContext()
  const { compiledTitle, compiledSummary, hero } = project

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
        {hero?.src && (
          <Image src={hero.src} alt={hero.alt} width={300} height={300} />
        )}
      </figure>
      <div>
        {compiledTitle && <MDX mdx={{ compiledSource: compiledTitle }} />}
        <div className={styles.grid}>
          {buildSection('When', compiledSummary?.when, true)}
          {buildSection('Where', compiledSummary?.where)}
          {buildSection('Who', compiledSummary?.who)}
          {buildSection('What', compiledSummary?.what)}
          {buildSection('Why', compiledSummary?.why)}
        </div>
      </div>
    </div>
  )
}
