import { FC } from 'react'
import { SectionProps } from '.'

export const Am: FC<SectionProps> = ({ Strong, ColorLink }) => {
  if (!Strong || !ColorLink) {
    return null
  }

  return (
    <>
      <h2 className="h2-as-h1">
        I <span className="text-highlight">am</span>
      </h2>

      <div>
        <p>
          ... a <Strong>full-stack developer</Strong>,{' '}
          <Strong>technical manager</Strong>, and <Strong>consultant</Strong>{' '}
          with focus on <Strong>modern technologies</Strong> and efficient
          communication.
        </p>
        <p>
          ... a certified <Strong>Scrum Master</Strong> (PSM1) — but I still
          love other Agile frameworks — I still want to work with{' '}
          <Strong>Shape Up</Strong>;
        </p>
        <p>
          ... a <Strong>writer</Strong> and <Strong>editor</Strong> of both
          short stories and a{' '}
          <ColorLink href="https://temposfantasticos.com">
            sci-fi newspaper
          </ColorLink>{' '}
          — turned into a 400+ pages{' '}
          <ColorLink href="https://www.plutaolivros.com.br/catalogo-1/tempos-fant%C3%A1sticos">
            book
          </ColorLink>
          .
        </p>
        <p>
          ... an avid{' '}
          <ColorLink href="https://www.goodreads.com/user/show/141444567-angelo-dias">
            reader
          </ColorLink>
          , gamer, and{' '}
          <ColorLink href="https://letterboxd.com/cronofobico/">
            movie watcher
          </ColorLink>
          .
        </p>
      </div>
    </>
  )
}
