import { Link } from '#components/common/Links'
import React, { FC } from 'react'
import { SectionProps } from '.'

export const Am: FC<SectionProps> = ({ color }) => {
  const Strong: FC = ({ children }) => (
    <strong className={color}>{children}</strong>
  )

  const ColorLink: typeof Link = props => (
    <Link className={color} {...props}>
      {props.children}
    </Link>
  )

  return (
    <>
      <h2 className="h2-as-h1">
        I <span className={color}>am</span>
      </h2>

      <div>
        <p>
          ... a <Strong>front end developer</Strong> and{' '}
          <Strong>consultant</Strong> in{' '}
          <ColorLink href="https://foobar.agency/">
            foobar Agency GmbH
          </ColorLink>
          , in Munich, Germany;
        </p>
        <p>
          ... a certified <Strong>Scrum Master</Strong> (PSM1);
        </p>
        <p>
          ... a <Strong>daily podcaster</Strong>.{' '}
          <ColorLink href="https://anchor.fm/cronofobia">Cronofobia</ColorLink>{' '}
          is a podcast in Brazilian Portuguese about multiple subjects (like, a
          lot, really);
        </p>
        <p>
          ... a <Strong>writer</Strong> and <Strong>editor</Strong>. I'm editing
          a{' '}
          <ColorLink href="https://temposfantasticos.com/">
            Tempos Fantásticos
          </ColorLink>{' '}
          book, with its entire history. It's already over 300 pages.
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
