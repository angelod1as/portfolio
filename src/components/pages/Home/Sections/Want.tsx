import React, { FC } from 'react'
import { SectionProps } from '.'

export const Want: FC<SectionProps> = ({ color }) => {
  const Strong: FC = ({ children }) => (
    <strong className={color}>{children}</strong>
  )

  return (
    <>
      <h2 className="h2-as-h1">
        I <span className={color}>want</span>
      </h2>

      <div>
        <p>
          ... to work with developers, designers, and product owners. Both{' '}
          <Strong>technical</Strong> and <Strong>non-technical</Strong> people,
          making sure the work is fun and important;
        </p>
        <p>
          ... to be a <Strong>hub of information</Strong> to anyone, from any
          department. A go-to place to <Strong>solve problems</Strong> and{' '}
          <Strong>understand the big-picture</Strong>;
        </p>
        <p>
          ... to be in the <Strong>meetings no one wants to be,</Strong> in
          order for them to use their time in an intelligent way:{' '}
          <Strong>doing what they do best</Strong>;
        </p>
        <p>
          ... to deliver <Strong>high value</Strong> in whatever format the
          client needs. My focus is <Strong>web development</Strong>, but this
          can change at any time.{' '}
        </p>

        {/* TODO: Carreer manifesto */}
        {/* <Link href="/" className={color}>
          Read my carreer manifesto.
        </Link> */}
      </div>
    </>
  )
}
