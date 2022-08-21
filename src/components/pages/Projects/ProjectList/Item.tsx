import React from 'react'
import { ProjectMetadata } from '#types/types'
import { useColorContext } from '#components/templates/Providers/ColorProvider'
import { MDX } from '#components/common/MDX'
import styles from './Project.module.sass'
import Image from 'next/image'
import { CTA } from '#components/common/CTA'

type ItemProps = {
  metadata: Partial<ProjectMetadata>
}

export const Item = ({ metadata }: ItemProps) => {
  const { colors } = useColorContext()
  const { title, subtitle, compiledSummary, hero, live } = metadata

  const buildSection = (
    prefix: string,
    content: string | null | undefined,
    paragraph?: boolean
  ) => {
    if (!content) return null

    return (
      <>
        <b className={`alternates ${styles.prefix} ${colors.textColor}`}>
          {prefix}
        </b>
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
    <div className="grid grid-cols-[200px_1fr] gap-6 ">
      <figure className="flex flex-col gap-4">
        <div className={'w-40 h-40' + ' ' + colors.bgColor}>
          {hero?.src ? (
            <Image src={hero.src} alt={hero.alt} width={300} height={300} />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-black text-9xl">
              {title?.substring(0, 1)}
            </div>
          )}
        </div>
        <CTA
          href={live}
          disabled={!live}
          content={
            live ? (
              'See the project'
            ) : (
              <span className="text-xs">Project unavailable</span>
            )
          }
        />
      </figure>
      <div className="mt-[-6px]">
        {title && <h3 className={colors.textColor}>{title}</h3>}
        {subtitle && <p>{subtitle}</p>}
        <div className={styles.grid}>
          {compiledSummary && (
            <>
              {buildSection('When', compiledSummary?.when, true)}
              {buildSection('Where', compiledSummary?.where)}
              {buildSection('Who', compiledSummary?.who)}
              {buildSection('What', compiledSummary?.what)}
              {buildSection('Why', compiledSummary?.why)}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
