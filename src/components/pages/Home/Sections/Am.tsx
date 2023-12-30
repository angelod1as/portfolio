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
          ... a certified <Strong>Scrum Master</Strong> (PSM1);
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
          ... an amateur{' '}
          <ColorLink href="https://soundcloud.com/angelod1as">
            solo music maker
          </ColorLink>
          .
        </p>
      </div>
    </>
  )
}
