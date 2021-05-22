import { cloneElement, ReactNode } from 'react'
import InlineEmbed from '@components/atoms/InlineEmbed'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import { nanoid } from 'nanoid'

import { IProject } from 'src/@types/generated/contentful'

import { NodeProps } from '../index'
import Link from 'next/link'

hljs.registerLanguage('javascript', javascript)

interface ChildProps {
  type: string
  props: {
    children: ReactNode
    href: string
  }
}

export default function handleParagraph(
  node: NodeProps,
  children: ReactNode[]
) {
  let isPre = false
  let isEmbed = false
  const map = children.map((child: ChildProps, index) => {
    if (
      typeof child === 'object' &&
      child?.props?.children &&
      Array.isArray(child?.props?.children)
    ) {
      // Handle URLs
      if (child.type === 'a') {
        if (child?.props?.href) {
          if (
            child.props.href.includes('http') ||
            child.props.href.includes('mailto')
          ) {
            const compo = child as any
            const newCompo = cloneElement(compo, {
              target: '_blank',
              rel: 'noreferrer',
            }) as ChildProps
            child = newCompo
          } else if (child?.props?.href) {
            return (
              <Link key={nanoid()} href={child?.props?.href}>
                {child.props.children[0]}
              </Link>
            )
          }
        }
      }

      // Handle Inline Entries
      if (Array.isArray(child.props.children)) {
        if (child.props.children.includes('embedded-entry-inline')) {
          const content: IProject['fields'] | undefined =
            node.content[index]?.data?.target?.fields

          if (content) {
            const { description, slug, title, coverImage, date } = content
            isEmbed = true
            return (
              <InlineEmbed
                key={nanoid()}
                {...{ description, slug, title, coverImage, date }}
              />
            )
          }
        } else if (child.props.children.includes('entry-hyperlink')) {
          const content = node.content[index]
          const values: IProject['fields'] | undefined =
            content?.data?.target?.fields
          if (values) {
            const tags = values.tags.map(tag => tag.fields.title)
            const { slug } = values
            const string = content.content[0].value
            let prefix = '/projects/'
            if (tags.includes('Tile content')) {
              prefix = '/'
            }

            return (
              <Link key={nanoid()} href={prefix + slug}>
                {string}
              </Link>
            )
          }
        }
      }
    }

    // Handle code blocks
    if (child.type && child.type === 'code') {
      if (children.length > 1) {
        return (
          <code
            data-testid="code"
            key={nanoid()}
            dangerouslySetInnerHTML={{
              __html: hljs.highlightAuto(child.props.children).value,
            }}
          />
        )
      } else {
        isPre = true
        return (
          <pre key={nanoid()} data-testid="pre" className="block">
            <code
              data-testid="code"
              dangerouslySetInnerHTML={{
                __html: hljs.highlightAuto(child.props.children).value,
              }}
            />
          </pre>
        )
      }
    }
    return child
  })

  if (isPre || isEmbed) {
    return <div>{map}</div>
  }
  return <p>{map}</p>
}
