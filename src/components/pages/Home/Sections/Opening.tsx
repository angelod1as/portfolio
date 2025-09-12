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
        I'm angelo and I do <span className="text-highlight">stuff</span>
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
          I <Strong>code</Strong> professionally and have worked on{' '}
          <Strong>a lot</Strong> of different projects.
        </p>
        <p>
          Continue reading to know more, check my{' '}
          <Strong>
            <Link href="/projects">projects</Link>
          </Strong>
          , or see my{' '}
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
