import { Link } from '#components/common/Links'
import React, { FC } from 'react'
import { SectionProps } from '.'

export const Was: FC<SectionProps> = ({ color }) => {
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
        I <span className={color}>was</span>
      </h2>

      <div>
        <p>
          ... a <Strong>tech lead</Strong> of a small team on{' '}
          <ColorLink href="https://www.seasoned.cc/">Seasoned.cc</ColorLink>,
          working alongside <Strong>designers</Strong> and{' '}
          <Strong>developers</Strong> to build the HR web app{' '}
          <ColorLink href="https://www.metadados.com.br/vibe">Vibe</ColorLink>;
        </p>
        <p>
          ... a <Strong>full stack mobile developer</Strong> at the livestock
          company{' '}
          <ColorLink href="https://www.databoi.com.br/">Databoi</ColorLink>,
          doing code and making <Strong>critical technology decisions</Strong>;
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
          worked on a project that won{' '}
          <ColorLink href="/awards">
            Brazil's biggest journalism award
          </ColorLink>
          , among other prizes;
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
          <ColorLink href="https://www.cronofobia.com/">online store</ColorLink>
          ), and a participant in{' '}
          <ColorLink href="https://medium.com/@tefopress">
            Tefopress
          </ColorLink>{' '}
          annual zine collection;
        </p>
      </div>
    </>
  )
}
