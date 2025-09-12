import { MDXProps } from '#types/types'
import React, { Children, ComponentProps, ReactElement } from 'react'
import { CTA, CTAProps } from '../CTA'
import { Link } from '../Links'
import { Parenthesis, ParenthesisProps } from './Parenthesis'
import { MDXProvider } from '@mdx-js/react'
import Image, { ImageProps } from 'next/image'
import { Author, AuthorProps } from './Author'
import { Embed, EmbedProps } from './Embed'
import { Audio } from '../Audio/Audio'

type Props = {
  components?: MDXProps['components']
}

export type MDXComponents = ComponentProps<typeof MDXProvider>['components']

export const parseComponents = ({
  components = {},
}: Props): MDXComponents[] => {
  const bodyComponents = {
    Audio: Audio,
    Small: ({ children, ...props }: JSX.IntrinsicElements['small']) => {
      return (
        <small {...props} className={`text-sm ${props.className ?? ''}`}>
          {Children.map(children, item => {
            const ReactItem = item as ReactElement
            if (ReactItem?.props?.children) {
              return <span>{ReactItem?.props?.children}</span>
            }
            return item
          })}
        </small>
      )
    },
    S: (props: JSX.IntrinsicElements['s']) => <s {...props} />,
    CTA: (props: CTAProps) => <CTA {...props} mdx />,
    Parenthesis: (props: ParenthesisProps) => <Parenthesis {...props} />,
    Author: (props: AuthorProps) => <Author {...props} />,
    Embed: (props: EmbedProps) => <Embed {...props} />,
    b: (props: JSX.IntrinsicElements['b']) => (
      <b {...props} className="text-highlight" />
    ),
    Image: ({ caption, ...props }: ImageProps & { caption?: string }) => {
      return (
        <figure className="my-8">
          <Image {...props} alt={props.alt} />
          <figcaption className="text-sm text-center text-gray-400">
            {caption}
          </figcaption>
        </figure>
      )
    },
    strong: (props: JSX.IntrinsicElements['strong']) => (
      <strong {...props} className="text-highlight" />
    ),
    a: (props: JSX.IntrinsicElements['a']) => (
      <Link className="text-highlight" {...props} href={props.href ?? ''} />
    ),
    blockquote: (props: JSX.IntrinsicElements['blockquote']) => (
      <blockquote {...props}>
        {props.children}
        <div className="absolute top-0 left-0 w-[2px] h-full bg-highlight" />
      </blockquote>
    ),
    h1: (props: JSX.IntrinsicElements['h1']) => (
      <h1 {...props}>{props.children}</h1>
    ),
    h2: (props: JSX.IntrinsicElements['h2']) => (
      <h2 className="text-highlight" {...props}>
        {props.children}
      </h2>
    ),
    h3: (props: JSX.IntrinsicElements['h3']) => (
      <h3 className="text-highlight" {...props}>
        {props.children}
      </h3>
    ),
    h4: (props: JSX.IntrinsicElements['h4']) => (
      <h4 className="text-highlight" {...props}>
        {props.children}
      </h4>
    ),
    h5: (props: JSX.IntrinsicElements['h5']) => (
      <h5 className="text-highlight" {...props}>
        {props.children}
      </h5>
    ),
    h6: (props: JSX.IntrinsicElements['h6']) => (
      <h6 className="text-highlight" {...props}>
        {props.children}
      </h6>
    ),
    pre: (props: JSX.IntrinsicElements['pre']) => (
      <pre
        className={`p-4 mt-4 mb-8 overflow-auto bg-neutral-700 ${
          props?.className ?? ''
        }`}
        {...props}
      >
        {props.children}
      </pre>
    ),
    li: (props: JSX.IntrinsicElements['li']) => (
      <li className="before:text-highlight" {...props}>
        {props.children}
      </li>
    ),
    ...components,
  }

  const titleComponents = {
    p: (props: JSX.IntrinsicElements['p']) => (
      <h1 {...props}>{props.children}</h1>
    ),
    strong: (props: JSX.IntrinsicElements['strong']) => (
      <strong {...props} className="text-highlight" />
    ),
  }

  return [bodyComponents, titleComponents]
}
