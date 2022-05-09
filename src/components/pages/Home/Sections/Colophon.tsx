import { Link } from '#components/common/Links'
import { FCC } from '#types/types'
import React, { FC } from 'react'
import { SectionProps } from '.'

export const Colophon: FC<SectionProps> = ({ color }) => {
  const Strong: FCC = ({ children }) => (
    <strong className={color}>{children}</strong>
  )

  return (
    <div>
      <h3 className={`${color} mb-6`}>End notes</h3>

      <div>
        <h4 className={`${color} mb-3`}>Colophon</h4>
        <p>
          This website was first made using Gatsby, then moved to NextJS. It's
          written in Typescript and MDX, and hosted in Vercel.
        </p>
        <p>
          It is also open source. See the code{' '}
          <Link
            className={color}
            href="https://github.com/angelod1as/portfolio"
          >
            here
          </Link>
          .
        </p>
        <h4 className={`${color} mb-3 mt-6`}>A personal message</h4>
        <p>
          The older version of this portfolio/resumé was filled with texts and
          information about me and my projects. It was very fun writing the
          thousands of words in it, but <Strong>no one actually read it</Strong>
          .
        </p>
        <p>
          That's why I ended up with this <em>quasi</em> single page website.
          More straight to the point, with less clutter.
        </p>
        <p>
          Making this website has a lot to do with{' '}
          <Strong>self-discovery</Strong> and it's a{' '}
          <Strong>therapeutical</Strong> project. I hope you enjoy reading what
          I wrote here and end up being interested in, at least, sharing a cup
          of tea. Yep, I don't drink coffee. Shame on me.
        </p>
      </div>
    </div>
  )
}
