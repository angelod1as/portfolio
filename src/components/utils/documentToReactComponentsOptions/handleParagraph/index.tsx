import { cloneElement, ReactNode } from 'react'
import InlineEmbed from '@components/atoms/InlineEmbed'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import { nanoid } from 'nanoid'

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

let isPre = false
let isEmbed = false

const buildCodeBlock = ({ children, element }) => {
  if (children.length > 1) {
    return (
      <code
        data-testid="code"
        key={nanoid()}
        dangerouslySetInnerHTML={{
          __html: hljs.highlightAuto(element).value,
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
            __html: hljs.highlightAuto(element).value,
          }}
        />
      </pre>
    )
  }
}

const buildUrls = ({ child }) => {
  const { href } = child.props
  const regularLink =
    href.includes('http') || href.includes('mailto') || href.includes('www')

  if (regularLink) {
    return cloneElement(child, {
      target: '_blank',
      rel: 'noreferrer',
    }) as ChildProps
  }

  return (
    <Link key={nanoid()} href={href}>
      {child.props.children[0]}
    </Link>
  )
}

const buildEmbeddedEntry = ({
  fields: { description, slug, title, coverImage, date },
}) => {
  isEmbed = true
  return (
    <InlineEmbed
      key={nanoid()}
      {...{ description, slug, title, coverImage, date }}
    />
  )
}

const buildEntryHyperlinks = ({ fields, nodeContent }) => {
  const tags = fields.tags.map(tag => tag.fields.title)
  const { slug } = fields
  const string = nodeContent.content[0].value
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

export default function handleParagraph(
  node: NodeProps,
  children: ReactNode[]
) {
  const map = children.map((child: ChildProps, index) => {
    const nodeContent = node.content[index]
    const fields = nodeContent?.data?.target?.fields
    const props = child?.props
    const type = child?.type
    const childrenElements = props?.children as ReactNode[] | undefined
    const href = props?.href

    if (typeof child === 'object' && childrenElements) {
      // Handle URLs
      if (type === 'a' && href) {
        return buildUrls({ child })
      }
      // Handle code blocks
      if (type === 'code') {
        return buildCodeBlock({ children, element: child.props.children })
      }
      // Handle Inline Entries
      if (fields) {
        if (childrenElements.includes('embedded-entry-inline')) {
          return buildEmbeddedEntry({ fields })
        } else if (childrenElements.includes('entry-hyperlink')) {
          return buildEntryHyperlinks({ fields, nodeContent })
        } else {
          isEmbed = false
          return child
        }
      }
      return null
    }

    return child
  })

  if (isPre || isEmbed) {
    return <div>{map}</div>
  }
  return <p>{map}</p>
}
