import React, { FC } from 'react'
import { SectionProps } from '.'

export const Was: FC<SectionProps> = ({ color, Strong, ColorLink }) => {
  if (!Strong || !ColorLink) {
    return null
  }

  return (
    <>
      <h2 className="h2-as-h1">
        I <span className={color}>was</span>
      </h2>

      <div>
        <p>
          ... a <Strong>consultant</Strong> and <Strong>developer</Strong>{' '}
          building the{' '}
          <ColorLink inner href="/projects/huk">
            HUK Autoservice
          </ColorLink>{' '}
          storefront in{' '}
          <ColorLink href="https://foobar.agency/">
            foobar Agency GmbH
          </ColorLink>
          , in Munich, Germany;
        </p>
        <p>
          ... a <Strong>tech lead</Strong> of a small team on{' '}
          <ColorLink href="https://www.seasoned.cc/">Seasoned.cc</ColorLink>,
          working alongside <Strong>designers</Strong> and{' '}
          <Strong>developers</Strong> to build the HR web app{' '}
          <ColorLink href="https://www.metadados.com.br/vibe">Vibe</ColorLink>;
        </p>
        <p>
          ... a <Strong>designer</Strong> and{' '}
          <Strong>front-end developer</Strong> at Latin America's biggest
          newspaper,{' '}
          <ColorLink href="https://www.folha.uol.com.br/">
            Folha De S.Paulo
          </ColorLink>
          . I designed <Strong>print</Strong> and <Strong>digital</Strong>{' '}
          pages, built multimedia <Strong>infographics</Strong>, and developed
          internal and external <Strong>digital tools</Strong>. At Folha I
          worked on a project that won {/* <ColorLink href="/awards"> */}
          <Strong>Brazil's biggest journalism award</Strong>
          {/* </ColorLink> */}, among other prizes;
        </p>
        <p>
          ... a <Strong>writer</Strong>, <Strong>editor</Strong>, and{' '}
          <Strong>manager</Strong> in the satyrical sci-fi newspaper{' '}
          <ColorLink href="https://temposfantasticos.com/">
            Tempos Fantásticos
          </ColorLink>{' '}
          for <Strong>28 editions</Strong> (3 years);
        </p>
        <p>
          ... a <Strong>programmer</Strong> of{' '}
          <ColorLink href="https://github.com/angelod1as/recibo-poem-printer">
            a box that prints
          </ColorLink>{' '}
          poems, short stories, and comic strips in collaboration with an
          LGBTQIA+ house in São Paulo, Brazil.
        </p>
        <p>
          ... the <Strong>scriptwriter</Strong> of{' '}
          <ColorLink href="https://tapas.io/series/COMBO-BREAKER/info">
            Combo Breaker
          </ColorLink>
          , a silent story drawn by Brazilian comic artist Silva João.
        </p>
        <p>
          ... a self-published <Strong>zine author</Strong> (I even put up an{' '}
          <ColorLink href="https://zine.cronofobia.com/">
            online store
          </ColorLink>
          ), and a participant in{' '}
          <ColorLink href="https://medium.com/@tefopress">Tefopress</ColorLink>{' '}
          annual zine collection;
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
