import { Link } from '#components/common/Links'
import React, { FC } from 'react'
import { SectionProps } from '.'

export const Generalist: FC<SectionProps> = ({ color }) => {
  const Strong: FC = ({ children }) => (
    <strong className={color}>{children}</strong>
  )

  return (
    <>
      <h2 className="h2-as-h1">
        I'm a proud <span className={color}>generalist</span>
      </h2>

      <div>
        <p>
          My main focus is <Strong>communication</Strong>.
        </p>
        <p>
          I can integrate a <Strong>multidisciplinary team</Strong> and work out
          the <Strong>individuality</Strong> of each member in order to deliver{' '}
          <Strong>greater value</Strong> to the customer and to the
          professionals.
        </p>
        <p>
          I actually like <Strong>being in meetings</Strong> and{' '}
          <Strong>organizing things</Strong>. I'm a certified{' '}
          <Strong>Scrum Master</Strong> but adapt well to different{' '}
          <Strong>Agile</Strong> environments
        </p>
        <p>
          Also, I code using <Strong>Typescript</Strong> and{' '}
          <Strong>React</Strong>.{' '}
        </p>

        {/* TODO: Coding skills link */}
        <Link className={color} href="/">
          More about my coding skills here.
        </Link>
      </div>
    </>
  )
}
