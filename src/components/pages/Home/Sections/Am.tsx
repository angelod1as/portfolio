import React, { FC } from 'react'
import { SectionProps } from '.'

export const Am: FC<SectionProps> = ({ color, Strong, ColorLink }) => {
  if (!Strong || !ColorLink) {
    return null
  }

  return (
    <>
      <h2 className="h2-as-h1">
        I <span className={color}>am</span>
      </h2>

      <div>
        <p>
          ... a <Strong>front end developer</Strong> and{' '}
          <Strong>consultant</Strong> with focus on{' '}
          <Strong>modern technologies</Strong> and efficient communication.
        </p>
        <p>
          ... a certified <Strong>Scrum Master</Strong> (PSM1) — but I still
          love other Agile frameworks;
        </p>
        <p>
          ... a <Strong>writer</Strong> and <Strong>editor</Strong> of both
          short stories and a{' '}
          <ColorLink href="https://temposfantasticos.com">
            sci-fi newspaper
          </ColorLink>{' '}
          — turning soon into a 350-pages book
        </p>
        <p>
          ... an avid{' '}
          <ColorLink href="https://www.goodreads.com/user/show/141444567-angelo-dias">
            reader
          </ColorLink>
          ,{' '}
          <ColorLink href="https://backloggd.com/u/oicronofobico/">
            gamer
          </ColorLink>
          , and{' '}
          <ColorLink href="https://letterboxd.com/cronofobico/">
            movie watcher
          </ColorLink>
          . I really enjoy tracking things.
        </p>
      </div>
    </>
  )
}
