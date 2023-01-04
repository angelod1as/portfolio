import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import {
  randomColors,
  RandomColors,
  textColor as defaultTextColor,
} from 'src/helpers/colors'
import { Link } from '#components/common/Links'
import { Strong as StrongModifier } from '#components/common/Strong'
import { useColorContext } from '#components/templates/Providers/ColorProvider'
import { FCC } from '#types/types'

const PartyPage: NextPage = () => {
  const { colors } = useColorContext()
  const textColor = colors?.textColor ?? defaultTextColor[0]

  const Strong: FCC = ({ children }) => (
    <StrongModifier color={textColor}>{children}</StrongModifier>
  )

  return (
    <div>
      <h2 className="mb-4 h2-as-h1">
        Is your <span className={textColor}>URL</span> correct?
      </h2>
      <p>
        <small className="mb-4 italic">Portuguese below</small>
      </p>
      <p className="mb-4">
        This page — and every subpage — is intended to be used privately by
        participants in Angelo's events. If you landed here and don't know what
        this is about, please go back to the{' '}
        <Strong>
          <Link href="/">home page</Link>
        </Strong>
      </p>
      <p>
        If you <i>know</i> where you should have landed, there's something
        missing in your URL. It should be like this:
      </p>
      <pre className="mb-3">
        <code>angelodias.com.br/party/something</code>
      </pre>
      <p>
        (replace <i>something</i> with your event's name.)
      </p>

      <hr className="mt-6 mb-6" />

      <p className="mb-4">
        Essa página — e as subpáginas — é usada de modo privado pelos
        participantes dos eventos do Angelo. Se você caiu aqui e não sabe do que
        estou falando, por favor volte para a{' '}
        <Strong>
          <Link href="/">home page</Link>
        </Strong>
      </p>
      <p>
        Se você <i>sabe</i> do que estou falando, há algo faltando na sua URL.
        Ela deveria ser assim:
      </p>
      <pre className="mb-3">
        <code>angelodias.com.br/festa/algo</code>
      </pre>
      <p>
        (substitua <i>algo</i> com o nome do seu evento.)
      </p>
    </div>
  )
}

export default PartyPage

type GetStaticPropsType = {
  colors: RandomColors
}

export const getStaticProps: GetStaticProps<GetStaticPropsType> = async () => {
  const colors = randomColors()

  return {
    props: { colors, slug: 'homepage' },
  }
}
