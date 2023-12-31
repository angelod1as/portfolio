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

  const Intro = ({ className }: { className: string }) => (
    <div className={`flex flex-col gap-4 mb-4  ${className}`}>
      {title && <h3 className={`${colors.textColor}`}>{title}</h3>}
      <p className="m-0">{description}</p>
    </div>
  )

  return (
    <div className="md:grid md:grid-cols-[200px_1fr] md:gap-6">
      <Intro className="md:hidden sm:block" />

      <figure className="flex flex-col gap-4 mb-8 md:mb-0">
        {hero?.src && (
          <Image src={hero.src} alt={hero.alt} width={300} height={300} />
        )}
        <div className="flex flex-col justify-between gap-4 sm:flex-row md:flex-col">
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
                <span className="text-xs">Project offline</span>
              )
            }
          />
        </div>
      </figure>
      <div className="mt-[-6px]">
        <Intro className="md:block sm:hidden" />
        {compiledSummary && (
          <SummarySection compiledSummary={compiledSummary} />
        )}
      </div>
    </div>
  )
}
