import { CTA } from '#components/common/CTA'
import { FCC, Metadata } from '#types/types'
import React from 'react'
import { SummarySection } from '../SummarySection.tsx'

type ProjectWrapperProps = {
  metadata: Metadata
}

export const ProjectWrapper: FCC<ProjectWrapperProps> = ({
  children,
  metadata,
}) => {
  const { compiledSummary, live } = metadata

  return (
    <>
      <div className="mb-16">
        <SummarySection compiledSummary={compiledSummary} />
        <div className="mt-8">
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
        </div>
      </div>

      {children}
    </>
  )
}
