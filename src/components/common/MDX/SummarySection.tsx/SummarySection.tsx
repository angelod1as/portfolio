import { ProjectProps } from '#components/pages/Projects'
import React from 'react'
import { SummaryItem } from './SummaryItem'

import styles from './SummarySection.module.sass'

type SummarySectionProps = {
  compiledSummary: ProjectProps['metadata']['compiledSummary']
}

export const SummarySection = ({ compiledSummary }: SummarySectionProps) => {
  const { ongoing, what, when, where, who, why } = compiledSummary ?? {}

  return (
    <div className={styles.grid}>
      <SummaryItem prefix="When" content={when} isParagraph ongoing={ongoing} />
      <SummaryItem prefix="Where" content={where} />
      <SummaryItem prefix="Who" content={who} />
      <SummaryItem prefix="What" content={what} />
      <SummaryItem prefix="Why" content={why} />
    </div>
  )
}
