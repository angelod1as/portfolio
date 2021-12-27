import React, { FC } from 'react'
import { Verb, verbs } from 'src/helpers/verbs'

type Props = {
  tags: Verb[]
}

export const Tags: FC<Props> = ({ tags }) => {
  return (
    <div className="flex gap-2 text-xs not-italic font-normal">
      {tags.map(tag => {
        const verb = verbs[tag]
        return (
          <div key={verb.title} className={`px-1 py-0 ${verb.bg}`}>
            {verb.title}
          </div>
        )
      })}
    </div>
  )
}
