import { Link } from '#components/common/Links'
import { Subscribe } from '#components/common/Subscribe'
import { FC } from 'react'
import { SectionProps } from '.'

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
          I'm a <Strong>communication afficionado</Strong> and an{' '}
          <Strong>award-winning journalist</Strong>.
        </p>
        <p>
          I make <Strong>music</Strong> and write{' '}
          <Strong>speculative fiction</Strong>.
        </p>
        <p>
          I have a <Strong>newsletter</Strong>, did a{' '}
          <Strong>daily podcast</Strong> for ±500 episodes, and edited a{' '}
          <Strong>sci-fi newspaper</Strong> for 3 years.
        </p>
        <p>
          See my{' '}
          <Strong>
            <Link href="/cv/angelo_dias-resume.docx" download>
              resumé
            </Link>
          </Strong>{' '}
          and{' '}
          <Strong>
            <Link href="/cv/angelo_dias-cover_letter.docx" download>
              cover letter
            </Link>
          </Strong>
          .
        </p>
        <p>
          If you can read <Strong>Brazilian Portuguese</Strong>, check out my{' '}
          <Strong>
            <Link href="https://www.cronofobia.com/">newsletter</Link>
          </Strong>
          :
        </p>
        <Subscribe succint />
      </div>
    </>
  )
}
