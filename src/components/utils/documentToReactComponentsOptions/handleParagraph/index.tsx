import { cloneElement, ReactNode } from 'react'
import InlineEmbed from '@components/atoms/InlineEmbed'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import { nanoid } from 'nanoid'

import { IProject } from 'src/@types/generated/contentful'

import { NodeProps } from '../index'

hljs.registerLanguage('javascript', javascript)

interface EachProps {
  type: string
  props: {
    children: ReactNode
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
          const compo = each as any
          const newCompo = cloneElement(compo, {
            target: '_blank',
            rel: 'noreferrer',
          }) as EachProps
          each = newCompo
        }

        // Handle Inline Entries
        if (
          Array.isArray(each.props.children) &&
          each.props.children.includes('embedded-entry-inline')
        ) {
          const content: IProject['fields'] | undefined =
            node.content[i]?.data?.target?.fields

          if (content) {
            const { description, slug, title, coverImage, date } = content
            return (
              <InlineEmbed
                {...{ description, slug, title, coverImage, date }}
              />
            )
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
