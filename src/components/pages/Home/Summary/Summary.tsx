import React from 'react'

export const Summary = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <p>
          I'm a <span className="font-bold text-red">developer</span>,{' '}
          <span className="font-bold text-violet">writer</span> and{' '}
          <span className="font-bold text-blue">designer</span>.
        </p>
        <p>
          I'm a <span className="font-bold text-green">Scrum Master</span> and{' '}
          <span className="font-bold text-pink">awarded journalist</span>.
        </p>
        <p>
          I make <span className="font-bold text-teal">music</span> and I read{' '}
          <span className="font-bold text-red">tarot</span>.
        </p>
        <p>
          I have a <span className="font-bold text-orange">daily podcast</span>{' '}
          with short episodes.
        </p>
      </div>
    </>
  )
}
