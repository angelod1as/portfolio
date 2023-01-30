import React from 'react'
import { useColorContext } from '#components/templates/Providers/ColorProvider'
import Image from 'next/image'
import { CTA } from '#components/common/CTA'
import { ProjectProps } from '../Projects'
import { SummarySection } from '#components/common/MDX/SummarySection.tsx'

export const Item = ({
  metadata,
  hasContent,
  slug,
}: Omit<ProjectProps, 'directory' | 'extension'>) => {
  const { colors } = useColorContext()
  const { title, description, compiledSummary, hero, live } = metadata

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
        {hasContent && (
          <CTA inner href={`/projects/${slug}`} content="Read more" />
        )}
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
        {description && <p>{description}</p>}
        {compiledSummary && (
          <SummarySection compiledSummary={compiledSummary} />
        )}
      </div>
    </div>
  )
}
