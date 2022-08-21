import { ProjectProps } from '#components/pages/Projects'
import React from 'react'
import { SummaryItem } from './SummaryItem'

import styles from './SummarySection.module.sass'

type SummarySectionProps = {
  compiledSummary: ProjectProps['metadata']['compiledSummary']
}

export const SummarySection = ({ compiledSummary }: SummarySectionProps) => {
  return (
    <div className={styles.grid}>
      <SummaryItem prefix="When" content={compiledSummary?.when} isParagraph />
      <SummaryItem prefix="Where" content={compiledSummary?.where} />
      <SummaryItem prefix="Who" content={compiledSummary?.who} />
      <SummaryItem prefix="What" content={compiledSummary?.what} />
      <SummaryItem prefix="Why" content={compiledSummary?.why} />
    </div>
  )
}
