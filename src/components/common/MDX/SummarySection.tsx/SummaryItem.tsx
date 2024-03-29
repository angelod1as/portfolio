import { useColorContext } from '#components/templates/Providers/ColorProvider'
import React from 'react'
import { MDX } from '../MDX'

type SummaryItemProps = {
  prefix: string
  content: string | null | undefined
  isParagraph?: boolean
  ongoing?: boolean | null
}

export const SummaryItem = ({
  prefix,
  content,
  isParagraph,
  ongoing,
}: SummaryItemProps) => {
  const { colors } = useColorContext()
  if (!content) return null

  return (
    <>
      <b className={`alternates ${colors.textColor}`}>{prefix}</b>
      <div>
        {isParagraph ? (
          <p>{ongoing ? `Since ${content}` : content}</p>
        ) : (
          <MDX mdx={{ compiledSource: content }} type="clean" />
        )}
      </div>
    </>
  )
}
