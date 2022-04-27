import React, { FC } from 'react'
import { SectionProps } from '.'

export const Opening: FC<SectionProps> = ({ color }) => {
  const Strong: FC = ({ children }) => (
    <strong className={color}>{children}</strong>
  )
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
          I have a <Strong>daily podcast</Strong> with short episodes.
        </p>
      </div>
    </>
  )
}