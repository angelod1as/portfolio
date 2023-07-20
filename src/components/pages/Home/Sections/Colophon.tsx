import { Link } from '#components/common/Links'
import React, { FC } from 'react'
import { SectionProps } from '.'

export const Colophon: FC<SectionProps> = ({ color }) => {
  return (
    <div>
      <h3 className={`${color} mb-6`}>Colophon</h3>

      <p>
        This website was first made using Gatsby, then moved to NextJS. It's
        written in Typescript and MDX, and hosted in Vercel.
      </p>
      <p>
        It is also open source. See the code{' '}
        <Link className={color} href="https://github.com/angelod1as/portfolio">
          here
        </Link>
        .
      </p>
    </div>
  )
}
