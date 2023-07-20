import React, { FC } from 'react'
import { SectionProps } from '.'
import { Link } from '#components/common/Links'

export const Opening: FC<SectionProps> = ({ color, Strong }) => {
  if (!Strong) {
    return null
  }

  return (
    <>
      <h1>
        I'm angelo and I do <span className={color}>stuff</span>
      </h1>

      <div>
        <p>
          I'm a <Strong>developer</Strong>, <Strong>writer</Strong> and{' '}
          <Strong>designer</Strong>.
        </p>
        <p>
          I'm a <Strong>Scrum Master</Strong> and{' '}
          <Strong>awarded journalist</Strong>.
        </p>
        <p>
          I make <Strong>music</Strong> and I read <Strong>tarot</Strong>.
        </p>
        <p>
          I have a <Strong>weekly newsletter</Strong> with multiple subjects.
        </p>
        <p>
          I have a pretty nice{' '}
          <Strong>
            <Link href="/cv/angelo_dias-resume.pdf" download>
              resumé
            </Link>
          </Strong>{' '}
          and{' '}
          <Strong>
            <Link href="/cv/angelo_dias-cover_letter.pdf" download>
              cover letter
            </Link>
          </Strong>
          .
        </p>
      </div>
    </>
  )
}
