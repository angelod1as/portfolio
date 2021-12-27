import React from 'react'
import { verbs } from 'src/helpers/verbs'

export const Summary = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <p>
          I'm a{' '}
          <span className={`font-bold ${verbs.coding.color}`}>developer</span>,{' '}
          <span className={`font-bold ${verbs.writing.color}`}>writer</span> and{' '}
          <span className={`font-bold ${verbs.design.color}`}>designer</span>.
        </p>
        <p>
          I'm a{' '}
          <span className={`font-bold ${verbs.mgmt.color}`}>Scrum Master</span>{' '}
          and{' '}
          <span className={`font-bold ${verbs.writing.color}`}>
            awarded journalist
          </span>
          .
        </p>
        <p>
          I make <span className={`font-bold ${verbs.audio.color}`}>music</span>{' '}
          and I read{' '}
          <span className={`font-bold ${verbs.tarot.color}`}>tarot</span>.
        </p>
        <p>
          I have a{' '}
          <span className={`font-bold ${verbs.audio.color}`}>
            daily podcast
          </span>{' '}
          with short episodes.
        </p>
      </div>
    </>
  )
}
