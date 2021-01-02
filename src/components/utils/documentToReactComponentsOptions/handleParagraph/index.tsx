import { cloneElement, ReactNode } from 'react'
import InlineEmbed from '@components/atoms/InlineEmbed'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import { nanoid } from 'nanoid'

import { IProject } from 'src/@types/generated/contentful'

import { NodeProps } from '../index'
import Link from 'next/link'

hljs.registerLanguage('javascript', javascript)

interface EachProps {
  type: string
  props: {
    children: ReactNode
    href: string
  }
}

export default function handleParagraph(node: NodeProps, children: ReactNode) {
  let isPre = false
  if (Array.isArray(children)) {
    const map = children.map((each: EachProps, i) => {
      if (
        typeof each === 'object' &&
        each?.props?.children &&
        Array.isArray(each?.props?.children)
      ) {
        // Handle URLs
        if (each.type === 'a') {
          if (each?.props?.href) {
            if (
              each.props.href.includes('http') ||
              each.props.href.includes('mailto')
            ) {
              const compo = each as any
              const newCompo = cloneElement(compo, {
                target: '_blank',
                rel: 'noreferrer',
              }) as EachProps
              each = newCompo
            } else if (each?.props?.href) {
              return (
                <Link key={nanoid()} href={each?.props?.href}>
                  {each.props.children[0]}
                </Link>
              )
            }
          }
        }

        // Handle Inline Entries
        if (Array.isArray(each.props.children)) {
          if (each.props.children.includes('embedded-entry-inline')) {
            const content: IProject['fields'] | undefined =
              node.content[i]?.data?.target?.fields

            if (content) {
              const { description, slug, title, coverImage, date } = content
              return (
                <InlineEmbed
                  key={nanoid()}
                  {...{ description, slug, title, coverImage, date }}
                />
              )
            }
          } else if (each.props.children.includes('entry-hyperlink')) {
            const content = node.content[i]
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
      if (each.type && each.type === 'code') {
        if (children.length > 1) {
          return (
            <code
              key={nanoid()}
              dangerouslySetInnerHTML={{
                __html: hljs.highlightAuto(each.props.children).value,
              }}
            ></code>
          )
        } else {
          isPre = true
          return (
            <pre key={nanoid()} className="block">
              <code
                dangerouslySetInnerHTML={{
                  __html: hljs.highlightAuto(each.props.children).value,
                }}
              ></code>
            </pre>
          )
        }
      }
      return each
    })

    if (isPre) {
      return map
    }
    return <p key={nanoid()}>{map}</p>
  }
}
